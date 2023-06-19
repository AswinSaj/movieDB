import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        console.log(movie);
        const { imdbID: id, Poster: image, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={image === "N/A" ? url : image} alt={title}></img>
              <div className="movie-info">
                <h4 className="title">{title}</h4>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
