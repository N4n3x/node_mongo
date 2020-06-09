'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String },
    year: { type: Number },
    genre: { type: String },
    viewerRating: { type: Number },
    viewerVotes: { type: Number }
});

mongoose.model('movie', movieSchema);
