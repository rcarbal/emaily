const express =require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// new GoogleStrategy contains a new instance of the new google strategy.
// Inside GoogleStrategy() we will show how what params to use the Google strategy
passport.use(new GoogleStrategy());

app.get("/", (req, res) => {
    res.send({hello: 'there'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);