const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

mongoose.connect(key.mongoURI, { useNewUrlParser: true })
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);