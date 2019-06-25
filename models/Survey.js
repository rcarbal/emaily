const mongoose = require('mongoose');
const { Schema } = mongoose;

const surverySchema = new Schema({
    title: String, 
    body: String,
    subject: String,
    recipients: [String]
});

mongoose.model('surverys', surverySchema);