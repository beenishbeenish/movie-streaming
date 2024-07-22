import React from "react";
import { TMovie } from "../../../utils/types";
import "./carousel.css";
interface MovieCardDetailsProps {
  movie: TMovie;
  setSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
}
const MovieCardDetails: React.FC<MovieCardDetailsProps> = ({
  movie,
  setSelectedMovie,
}) => {
  return (
    <div className="movie-card" onClick={() => setSelectedMovie(movie.title)}>
      <img
        src={movie.thumbnail_horizontal}
        alt=""
        className="movie-poster-detail"
      />
      <span>{movie.director}</span>
      <span>{movie.title}</span>
    </div>
  );
};

export default MovieCardDetails;
