import React from "react";
import { movies } from "../data";

function Movies() {

  console.log(movies)


  const movieTitle = movies.map((movie) => {
    return(
    <div>
      {movie.title}
      <ul>
        {movie.genres.map((genre) => {
          return (
            <li>
              {genre}
            </li>
          )
        })}
      </ul>
    </div>
  )})

  
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movieTitle}
      </div>

    </div>
  )
}

export default Movies;


// This component should render the text Movies Page in an <h1>, and make a new <div> for each movie. 
// The <div> should contain the movie's title, time and a <ul> with a list of its genres, each within their own <li>.
