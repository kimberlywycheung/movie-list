const MoviesModel = require('../models/MoviesModel.js');

const getMovies = (req, res) => {
  MoviesModel.getMovies((err, movies) => {
    if (err) {
      res.status(400).send('Hello World');
    } else {
      res.status(200).send(movies);
    }
  });
}

module.exports = { getMovies };