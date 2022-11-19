const express = require('express');
var cors = require("cors");

// Router
var router = require('./router.js');

const app = express();
const PORT = 8000 || process.env.PORT;


//app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

app.use('/api/movies', router);

//app.use(express.static(__dirname + '../../../client/src/index'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;