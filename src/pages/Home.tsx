import { useEffect, useState } from "react";

import { Movie } from "@/models/movie";
import { useUser } from "@/hooks/useUser";
import { getMovies } from "@/services/movie";
import { Paginator } from "@/components/Paginator";
import { MovieList } from "@/components/MovieList";
import { PageLayout } from "@/components/PageLayout";
import { ListSkeleton } from "@/components/ListSkeleton";

const ITEMS_PER_PAGE = 12;
const Home = () => {
  const { user } = useUser();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getMoviesData = async () => {
    setLoading(true);
    try {
      const data = await getMovies({
        page,
        itemsPerPage: ITEMS_PER_PAGE,
      });
      setTotal(data.items);
      setMovies(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, [page]);

  return (
    <PageLayout>
      <div className="layout">
        <h2 className="text-base-content text-3xl mb-4">
          Bienvenido {user?.name}!
        </h2>
        {loading && <ListSkeleton />}
        {!loading && movies.length > 0 && (
          <>
            <p className="text-right mb-2">{total} películas</p>
            <div className="mb-4">
              <MovieList movies={movies} />
            </div>
            <div className="flex justify-center md:justify-end">
              <Paginator
                currentPage={page}
                totalItems={total}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={(page) => {
                  setPage(page);
                }}
              />
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
