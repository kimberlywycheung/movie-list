import React from 'react';

const MovieListEntry = (props) => {

  const watchToggle = () => {
    props.movie.watched = !props.movie.watched;
    props.updateMovies();
  };

  return (
    <div className='movie-entry'>
      <div>
        <p className='movie-title'>{props.movie.title}</p>
      </div>
      <button id='category' onClick={watchToggle}>
        <small>{props.movie.watched ? 'Watched' : 'To Watch'}</small>
      </button>
    </div>
  );
};

export default MovieListEntry;