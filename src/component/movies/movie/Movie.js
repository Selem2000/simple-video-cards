import React from "react";
import Rating from "@material-ui/lab/Rating";

import "./movie.css";

const Movie = ({ details, showYourName }) => {
  const { name, date, type, description, image, rating } = details;
  return (
    <div className="movieBox" onClick={() => showYourName(name)}>
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            <div
              className="movie-img"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{name}</h1>
                  <ul className="movie-gen">
                    <li>{date} /</li>
                    <li>2h 49min /</li>
                    <li>{type}</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <Rating name="read-only" value={rating} readOnly />
                </div>
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">{description} </p>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1"></div>
              </div>
              <div className="mr-grid action-row">
                <div className="col2">
                  <div className="watch-btn">
                    <h3>
                      <i className="material-icons"></i>WATCH TRAILER
                    </h3>
                  </div>
                </div>
                <div className="col6 action-btn">
                  <i className="material-icons"></i>
                </div>
                <div className="col6 action-btn">
                  <i className="material-icons"></i>
                </div>
                <div className="col6 action-btn">
                  <i className="material-icons"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
