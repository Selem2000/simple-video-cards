import React from "react";
import SimpleModal from "./modal/Modal";
import Movie from "./movie/Movie";

import "./movies.css";

const Movies = ({ Data, title, rating, addNewMovie }) => {
  const showYourName = (name) => {
    alert(`movie name is ${name}`);
  };
  return (
    <div className="movies_liste">
      {Data.filter((e) => e.name.toLowerCase().includes(title.toLowerCase()))
        .filter((e) => e.rating >= rating)
        .map((movie) => (
          <Movie details={movie} key={movie.id} showYourName={showYourName} />
        ))}
      <SimpleModal addNewMovie={addNewMovie} />
    </div>
  );
};

export default Movies;
