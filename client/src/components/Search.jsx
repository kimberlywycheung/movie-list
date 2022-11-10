import React from 'react';

const Search = (props) => {

  const handleChange = () => {};

  const handleSubmit = () => {
    event.preventDefault();

    const query = document.querySelectorAll('input')[1].value;
    props.setQuery(query);
  };

  return (
      <form className="search" onSubmit={handleSubmit}>
        <input id="search-bar" type="text" placeholder="Search..." onChange={handleChange}></input>
        <button id="search-bar-submit">Go!</button>
      </form>
  );
};

export default Search;