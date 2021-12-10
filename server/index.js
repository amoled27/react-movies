const mongoose = require('mongoose');
const app = require('./app');

const config = require('./config/config');

if (config.mongoose.username) {
    mongoose.connect(config.mongoose.url, {
      auth: {
        user: config.mongoose.username || '',
        password: config.mongoose.password || '',
      },
    });
  } else {
    mongoose.connect(config.mongoose.uri);
  }

  mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
    server = app.listen(config.port, () => {
      console.log(`Listening to port ${config.port}`);
    });
  });



