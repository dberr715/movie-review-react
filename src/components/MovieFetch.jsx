import { useState } from "react";
import { DisplayArea } from "./DisplayArea";

export const MovieFetch = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState("");
  const [movieList, setMovieList] = useState([]);
  //   const [urlTitle, setUrlTitle] = useState("");

  const handleInputChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleClick = (e) => {
    getMovieInfo(movieTitle);
    setMovieTitle("");

    // setMovieTitle("");
  };

  const getMovieInfo = () => {
    // const apiUrl = `http://www.omdbapi.com/?t=fletch&apikey=4a35b7a3`;
    const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=4a35b7a3`;

    const getInfo = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setMovieData(data);
      setMovieList([...movieList, data]);
    };
    getInfo();
  };

  return (
    <>
      <p>Movie Database</p>
      <form>
        <input
          type="text"
          id="movieTitle"
          value={movieTitle}
          placeholder="Enter movie title here"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleClick}>
          Search For Film
        </button>
      </form>
      <div>
        {movieList
          .slice()
          .reverse()
          .map((movieData, index) => (
            <DisplayArea key={index} movieData={movieData} />
          ))}
      </div>
    </>
  );
};
