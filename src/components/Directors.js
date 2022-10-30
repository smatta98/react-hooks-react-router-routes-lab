import React from "react";
import { directors } from "../data";

function Directors() {
  
  // const directorsInfo = directors.map((director) => {
  //   return (
  //     <div>
  //       {director.name}
  //       <ul>
  //         {director.movies}
  //       </ul>
  //     </div>
  // )})


  const directorsInfo = directors.map((director) => {
    return(
    <div>
      {director.name}
     <ul>
        {director.movies.map((movie) => {
          return (
          <li>
            {movie}
          </li>
          )
        })}
      </ul>
    </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    <div>
      {directorsInfo}
    </div>
  </div>
  )
}

export default Directors;



// This component should render the text Directors Page in an <h1>, and make a new <div> for each director. 
// The <div> should contain the director's name and a <ul> with a list of their movies.