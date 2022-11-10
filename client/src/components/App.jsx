import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import View from './View.jsx';
import movielist from '../Movies.js'

const { useState, useEffect } = React;

const App = (props) => {

  const [movies, setMovies] = useState(movielist);
  const [query, setQuery] = useState("");
  const [currentView, setCurrentView] = useState("Watched");

  // useEffect(() => {
  //   movielist = movies;
  // }, movielist);

  return (
    <div>
      <h2>Movie List</h2>
      <Add movies={movies} setMovies={setMovies} currentView={currentView}/>
      <div className="top-bar">
        <Search setQuery={setQuery}/>
        <View currentView={currentView} setCurrentView={setCurrentView}/>
      </div>
      <MovieList movies={movies} query={query} currentView={currentView}/>
    </div>
  );
};

export default App;