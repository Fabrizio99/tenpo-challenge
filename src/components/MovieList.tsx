import { FC } from "react";

import { Movie } from "@/models/movie";
import { Card } from "@/components/Card";

interface Props {
  movies: Movie[];
}
export const MovieList: FC<Props> = ({ movies }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {movies.map((movie) => (
      <li key={movie.tconst}>
        <Card
          title={movie.primaryTitle}
          description={movie.startYear}
          badges={movie.genres}
        />
      </li>
    ))}
  </ul>
);
