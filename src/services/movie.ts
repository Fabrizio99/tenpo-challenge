import { api } from "./api";
import { PATHS } from "@/config/api";
import { Movie } from "@/models/movie";

interface Args {
  page?: number;
  itemsPerPage?: number;
}

interface Response {
  items: number;
  data: Movie[];
}
export const getMovies = async ({
  page,
  itemsPerPage,
}: Args): Promise<Response> => {
  const response = await api.get<Response>(PATHS.MOVIES, {
    params: {
      _page: page,
      _per_page: itemsPerPage,
    },
  });

  if (!response) {
    return {
      items: 0,
      data: [],
    };
  }
  return response?.data;
};
