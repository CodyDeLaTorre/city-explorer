import React from 'react';
import Movie from './Movie.js';





class Movies extends React.Component {
  render(){
    let movieArr = this.props.movieData.map((movie, idx) => {
      return (
        <Movie
          poster={movie.poster}
          title={movie.title}
          release={movie.release}
          key={idx}
        />
      )
    })
    return(
      <>
      {movieArr}
      </>
    )
  }

}




export default Movies;
