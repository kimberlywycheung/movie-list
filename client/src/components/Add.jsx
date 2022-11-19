import React from 'react';

const Add = (props) => {
  let moviesArray = props.movies.slice();

  let newTitle = '';

  const handleChange = (event) => {
    newTitle = event.target.value;
  };

  const handleSubmit = () => {
    event.preventDefault();

    let foundDuplicate = false;

    for (let i = 0; i < moviesArray.length; i++) {
      if (moviesArray[i].title.toLowerCase() === newTitle.toLowerCase()) {
        foundDuplicate = true;

        // can delete when updated with own database
        moviesArray[i].default = false;
        moviesArray[i].watched = props.watchedView;
      }
    }

    if (!foundDuplicate) {
      const movieObj = {
        title: input,
        default: false,
        watched: props.watchedView,
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