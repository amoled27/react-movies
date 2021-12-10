const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  movie_id: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const comment = mongoose.model("Comment", commentSchema);

module.exports = comment;
