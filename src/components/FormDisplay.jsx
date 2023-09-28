import React from "react";

export const FormDisplay = ({ handleClick, handleInputChange }) => {
  <>
    <p>Movie Database</p>
    <form>
      <input
        type="text"
        id="movieTitle"
        placeholder="Enter movie title here"
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleClick}>
        Search For Film
      </button>
    </form>
  </>;
};
