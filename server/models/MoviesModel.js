const db = require('../db/index.js');

// should grab movies directly from db
const getMovies = (callback) => {
  db.query('SELECT * FROM movielist', callback);
}

// should grab movies directly from db
// const addMovie = (callback) => {
//   //db.query('INSERT INTO movielist (title) VALUES (), callback);
// }

module.exports = { getMovies };