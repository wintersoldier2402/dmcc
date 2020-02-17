const mongoose = require('mongoose');
const allKeys = require('./keys');
mongoose.Promise = global.Promise;

const MONGODB_URI = allKeys.keys.MONGODB_URI;

mongoose.connect('mongodb://localhost:27017/dmc', {
    useNewUrlParser: true
})
.then(() => {
    console.log('Connected to DB');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
