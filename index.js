const express =require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

// new GoogleStrategy contains a new instance of the new google strategy.
// Inside GoogleStrategy() we will show how what params to use the Google strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.gogoleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken)=> {
    console.log(accessToken);
}));

app.get("/", (req, res) => {
    res.send({hello: 'there'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);