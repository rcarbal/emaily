const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surverySchema = new Schema({
    title: String, 
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {type: Number, defalut: 0},
    no: {type: Number, defalut: 0}
});

mongoose.model('surverys', surverySchema);