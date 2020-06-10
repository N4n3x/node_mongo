'use strict';

const mongoose = require('mongoose'),
Movie = mongoose.model('movie');

exports.list_all_movies = async (req, res) => {
  // console.log(req);
  // res.render('movies');
  const { page = 1, limit = 10, sort = "asc", keyword = "" } = req.query;
  let regex;
  if(keyword != ""){
    regex = ".*" + keyword + ".*";
  }else{
    regex = "";
  }
  try { 
    const count = await Movie.countDocuments({ 'title' : {$regex: regex} });

    const movies = await Movie.find({ 'title' : {$regex: regex} })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({year: (sort == "desc" ? -1 : 1)})
      .exec()
    ;

    res.render('movies', {
      title: 'Movies',
      currentPage: page,
      pages: Math.ceil(count / limit),
      movies: movies,
      url: req.pathname,
      sort: sort,
      keyword: keyword
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.sort_movies = async (req, res) => {
  console.log(req);
  // res.render('movies');
  const { page = 1, limit = 10 } = req.query;

  try {

    const count = await Movie.countDocuments();

    const movies = await Movie.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({title:-1})
      .exec()
    ;

    res.render('movies', {
      title: 'Movies',
      currentPage: page,
      pages: Math.ceil(count / limit),
      movies: movies
    });
  } catch (err) {
    console.error(err.message);
  }
};

