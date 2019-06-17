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
}, (accessToken, refreshToken, profile, done)=> {
    console.log(accessToken);
    
}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);