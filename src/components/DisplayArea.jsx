import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  flex: 1 0 33%;
  background-image: linear-gradient(
    to bottom right,
    rgb(244, 244, 246),
    rgb(225, 162, 162),
    rgb(9, 9, 9)
  );
  color: black;
  margin-top: 30px;
  box-shadow: rgb(226, 24, 24) 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, rgb(226, 24, 24) 10px -10px,
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(226, 24, 24) 20px -20px;
`;

export const DisplayArea = ({ movieData, handleSecondClick }) => {
  const [personalReview, setPersonalReview] = useState("");
  const [tempPersonalReview, setTempPersonalReview] = useState("");

  const handleSecondInput = (e) => {
    setTempPersonalReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalReview(tempPersonalReview);
    handleSecondClick(tempPersonalReview);
  };

  return (
    <CardWrapper>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={movieData.Poster} alt={movieData.Title} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{movieData.Title}</p>
              <p className="subtitle is-6">@Director-{movieData.Director}</p>
            </div>
          </div>

          <div className="content">
            {movieData.Plot}
            <br />
            {movieData.Ratings.map((rating, index) => (
              <p key={index}>
                {" "}
                Ratings: {rating.Source}, Score: {rating.Value}{" "}
              </p>
            ))}
            <p>Personal Letter Grade: {personalReview}</p>
            <br />
            <time dateTime="2016-1-1">Filmed in {movieData.Year} </time>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Letter Grade"
                value={tempPersonalReview}
                onChange={handleSecondInput}
              ></input>
              <button type="submit">Submit Rating</button>
            </form>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
