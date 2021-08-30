import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import "./Filter.css";

const Filter = ({ filtrageTitle, filtrageRating }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);

  return (
    <div className="filter-box">
      <h1>Find your movie</h1>
      <input
        type="text"
        placeholder="enter movie name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="rating">
        <Rating
          name="pristine"
          value={rating}
          id="star"
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          filtrageTitle(title);
          filtrageRating(rating);
          setRating(null);
          setTitle("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
