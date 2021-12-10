const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  plot: {
    type: String,
  },
  genres: [
    {
      type: String,
    },
  ],
  runtime: {
    type: Number,
  },
  cast: [
    {
      type: String,
    },
  ],
  languages: [
    {
      type: String,
    },
  ],
  directors: [
    {
      type: String,
    },
  ],
  countries: [
    {
      type: String,
    },
  ],
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  fullplot: {
    type: String,
  },
  rated: {
    type: String,
  },
  type: {
    type: String,
  },
  year: {
    type: Number,
  },
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  imdb: {
    rating: Number,
    id: Number,
    votes: Number,
  },

  num_mflix_comments: Number,
  released: Date,
});

// teamSchema.plugin(toJSON);
// teamSchema.plugin(paginate);
const movie = mongoose.model("Movie", movieSchema);

module.exports = movie;
