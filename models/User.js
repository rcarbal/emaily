const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// cosnt { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);