const MovieController = require('./controllers/MoviesController.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/api/movies', MovieController.getMovies);
//router.post('/api/movies', MovieController.postMovies);

module.exports = router;