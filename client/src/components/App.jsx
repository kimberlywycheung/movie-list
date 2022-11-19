import React, { useState, useEffect } from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import View from './View.jsx';
import movielist from '../Movies.js';
import app from '../../../server/index.js';


const App = (props) => {
  const [movies, setMovies] = useState(movielist);
  const [query, setQuery] = useState('');
  const [watchedView, setWatchedView] = useState(true);

  const handleMovieListToggle = (movies) => {
    setMovies(movies);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/movies")
      .then((res) => { console.log(res); setMovies([ res.body ]); })
      .catch(console.log(res));
   }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <Add movies={movies} setMovies={setMovies} watchedView={watchedView}/>
      <div className="top-bar">
        <Search setQuery={setQuery}/>
        <View watchedView={watchedView} setWatchedView={setWatchedView}/>
      </div>
      <MovieList movies={movies} handleMovieListToggle={handleMovieListToggle} query={query} watchedView={watchedView}/>
    </div>
  );
};

export default App;