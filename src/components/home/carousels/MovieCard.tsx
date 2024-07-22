import React from "react";
import { TMovie } from "../../../utils/types";
import "./carousel.css";
interface MovieCardProps {
  movie: TMovie;
  setSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie, setSelectedMovie }) => {
  return (
    <div className="movie-card" onClick={() => setSelectedMovie(movie.title)}>
      <img src={movie.thumbnail_horizontal} alt="" className="movie-poster" />
      <h1 className="movie-ranking">{movie?.id}</h1>
    </div>
  );
};

export default MovieCard;
