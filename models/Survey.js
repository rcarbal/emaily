const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surverySchema = new Schema({
    title: String, 
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {type: Number, defalut: 0},
    no: {type: Number, defalut: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surverys', surverySchema);