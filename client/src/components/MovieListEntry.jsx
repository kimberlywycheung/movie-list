import React from 'react';

const MovieListEntry = (props) => {

  const categoryClick = () => {
    if (props.movie.category === "Watched") {
      props.movie.category = "To Watch";
    } else {
      props.movie.category = "Watched";
    }
  };

  const titleClick = () => {
    console.log('titleclick');
  };

  return (
    <div className='movie-entry'>
      <div>
        <p className='movie-title' onClick={titleClick}>{props.movie.title}</p>
      </div>
      <button id='category' onClick={categoryClick}><small>{props.movie.category}</small></button>
    </div>
  );
};

export default MovieListEntry;

/* <div className='movie-info'>
<p>Year: {props.movie.info.year}</p>
<p>Runtime: {props.movie.info.runtime}</p>
<p>Metascore: {props.movie.info.metascore}</p>
<p>imdbRating: {props.movie.info.imdbRating}</p>
<img src='https://pinkroom-main.s3.amazonaws.com/cc036ee2-4581-4eed-96df-c962c2282526.jpg'></img>
</div> */