const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport'); 
const key = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [key.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(key.mongoURI, { useNewUrlParser: true })
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//mongodb+srv://admin:<password>@cluster0-szojo.mongodb.net/test?retryWrites=true&w=majority