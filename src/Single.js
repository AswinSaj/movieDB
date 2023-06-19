import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const apikey = `https://www.omdbapi.com/?apikey=d7f35e8a`;

const Single = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.response === "Flase") {
      console.log("error");
    } else {
      setMovie(data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovie(`${apikey}&i=${id}`);
  }, [id]);
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster}></img>
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default Single;
