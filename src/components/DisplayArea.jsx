import React from "react";

export const DisplayArea = ({ movieData }) => {
  // if (!movieData) {
  //   return;
  // }

  // return (
  //   <>
  //     <br />
  //     <h2>🎥🍿🎬</h2>
  //     <img src={movieData.Poster} alt={movieData.Title} />
  //     <ul>
  //       <li>Title: {movieData.Title}</li>
  //       <li>Director: {movieData.Director}</li>
  //       <li>Year Produced: {movieData.Year}</li>
  //     </ul>

  //     <p>Plot: {movieData.Plot}</p>

  //     {movieData.Ratings.map((rating, index) => (
  //       <p key={index}>
  //         {" "}
  //         Ratings: {rating.Source}, Score: {rating.Value}{" "}
  //       </p>
  //     ))}
  //   </>
  // );
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img id="movie-poster" src={movieData.Poster} alt={movieData.Title} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src={movieData.Poster} alt={movieData.Title} />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{movieData.Title}</p>
            <p class="subtitle is-6">@Director-{movieData.Director}</p>
          </div>
        </div>

        <div class="content">
          {movieData.Plot}
          <br />
          {movieData.Ratings.map((rating, index) => (
            <p key={index}>
              {" "}
              -------------------------------------- Ratings: {rating.Source},
              Score: {rating.Value}{" "}
            </p>
          ))}

          <br />
          <time datetime="2016-1-1">Filmed in {movieData.Year} </time>
        </div>
      </div>
    </div>
  );
};
