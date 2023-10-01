import React, { useState, useEffect } from "react";
import { DisplayArea } from "./DisplayArea";

export const MovieFetch = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleInputChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getMovieInfo(movieTitle);
    setMovieTitle("");
  };

  const handleSecondClick = (review) => {
    if (currentMovieIndex !== null) {
      const updatedMovieList = [...movieList];
      updatedMovieList[currentMovieIndex].personalReview = review;
      setMovieList(updatedMovieList);
    }
  };



  const getMovieInfo = (movieTitle) => {
    const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=4a35b7a3`;

    const getInfo = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      data.personalReview = ""; // Initialize personalReview property
      setMovieList((prevList) => [...prevList, data]);
    };
    getInfo();
  };

  return (
    <>
      <p className="title1">🎥Movie Database🎞️</p>
      <form className="title1">
        <input
          type="text"
          id="movieTitle"
          value={movieTitle}
          placeholder="Enter movie title here"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleClick}>
          Search For Film
        </button>
      </form>
      <div className="container">
        {movieList
          .slice()
          .reverse()
          .map((movieData, index) => (
            <DisplayArea
              key={index}
              movieData={movieData}
              handleSecondClick={(e) => handleSecondClick(e, index)}
            />
          ))}
      </div>
    </>
  );
};
