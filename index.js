const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const key = require('./config/keys');
require('./models/Survey');
require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

mongoose.connect(key.mongoURI, { useNewUrlParser: true })

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [key.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // Likeour main.js, or main.css files
    app.use(express.static('client/build'));
    //Express will serve up the index.html file
    // if itdoesn'trecognize the route.
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);