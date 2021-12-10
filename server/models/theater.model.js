const mongoose = require("mongoose");

const theaterSchema = mongoose.Schema({
  theaterId: {
    type: String,
    required: true,
  },
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: {
      type: {
        type: String,
      },
      coordinates: [
        {
          type: Number,
        },
      ],
    },
  },
});

// teamSchema.plugin(toJSON);
// teamSchema.plugin(paginate);
const theater = mongoose.model("Theater", theaterSchema);

module.exports = theater;
