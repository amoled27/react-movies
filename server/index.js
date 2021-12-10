const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
console.log(process.env, 'env')
if (process.env.DB_USERNAME) {
    mongoose.connect(process.env.MONGODB_URL, {
      auth: {
        user: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
      },
    });
  } else {
    mongoose.connect(process.env.MONGODB_URI);
  }

  mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
    server = app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  });



