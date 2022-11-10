import React from 'react';

const Add = (props) => {

  let moviesArray = props.movies.slice();

  const handleChange = () => {};

  const handleSubmit = () => {
    event.preventDefault();

    const input = document.querySelector('input').value;
    let foundDuplicate = false;

    for (let i = 0; i < moviesArray.length; i++) {
      if (moviesArray[i].title.toLowerCase() === input.toLowerCase()) {
        foundDuplicate = true;

        moviesArray[i].default = false;
        moviesArray[i].category = props.currentView;
      }
    }

    if (!foundDuplicate) {
      const movieObj = {
        title: input,
        default: false,
        category: props.currentView,
        info: {
          year: '1995',
          runtime: '107 min',
          metascore: '46',
          imdbRating: '62'
        }
      };

      moviesArray.push(movieObj);
    }

    props.setMovies(moviesArray);
  };

  return (
      <form id="add" onSubmit={handleSubmit}>
        <input id="add-bar" type="text" placeholder="Add movie title here" onChange={handleChange}></input>
        <button id="add-bar-submit"><b>Add</b></button>
      </form>
  );
};

export default Add;