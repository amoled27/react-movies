const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
    port:5000,
    mongoose: {
        uri: "mongodb+srv://admin:dbPass_123@cluster0.bxcjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    },
}