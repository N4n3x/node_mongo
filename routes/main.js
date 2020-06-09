const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/movies', async (req, res, next) => {
  const movie = require('../controllers/movieController');
  movie.list_all_movies(req, res);
  console.log(req.query);
  console.log(req.params);
  console.log(req.url);
  console.log(req);
});


// router.get('/movies2', async (req, res, next) => {
//   // const page = req.params.page || 1;
//   const { page = 1, limit = 10 } = req.query;
//   Movie = mongoose.model('movie');

//   try {

//     const movies = await Movie.find()
//       .limit(limit * 1)
//       .skip((page - 1) * limit)
//       .exec()
//     ;

//     const count = await Movie.countDocuments();

//     res.render('movies2', {
//       title: 'Movies',
//       currentPage: page,
//       pages: Math.ceil(count / limit),
//       movies: movies
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// });

module.exports = router;
