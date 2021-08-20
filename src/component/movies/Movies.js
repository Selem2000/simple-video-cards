import React from "react";
import Movie from "./movie/Movie";
import "./movies.css";

const Movies = ({ Data }) => {
    const showYourName = (name)=>{
        alert(`movie name is ${name}`)
    }
  return (
    <div className="movies_liste">
      {Data.map((movie) => (
        <Movie details={movie} key={movie.id} showYourName={showYourName} />
      ))}
    </div>
  );
};

export default Movies;
