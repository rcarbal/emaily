const mongoose = require('mongoose');
const { Schema } = mongoose;

const surverySchema = new Schema({
    title: String, 
    body: String,
    subject: String,
    recipients: [String],
    yes: {type: Number, defalut: 0},
    no: {type: Number, defalut: 0}
});

mongoose.model('surverys', surverySchema);