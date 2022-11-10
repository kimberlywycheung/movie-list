import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = (props) => {

  let movieList = props.movies.slice();

  if(props.query) {
    for (let i = movieList.length - 1; i >= 0; i--) {
      const title = movieList[i].title.toLowerCase();

      if (!title.includes(props.query.toLowerCase())) {
        movieList.splice(i, 1);
      }
    }
  }

  if (Object.keys(movieList).length === 0) {
    return (
      <p>No results found.. Try again!</p>
    );
  }

  return (
    <div className='movie-list'>
      {movieList.map((movie) => {
        if (movie.category === props.currentView) {
          return <MovieListEntry key={movie.title} movie={movie}/>;
        }
      })}
    </div>
  );
};

export default MovieList;