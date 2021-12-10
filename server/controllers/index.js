const httpStatus = require("http-status");
const { Movie } = require("../models");

const getMovies = async (_, res) => {
  try {
    const movies = await Movie.find().limit(10);
    res.status(httpStatus.OK).json({ movies });
  } catch (e) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error occured"});
  }
};

module.exports = {
  getMovies,
};
