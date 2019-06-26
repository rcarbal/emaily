const passport = require('passport');
const express = require('express');
      router = express.Router();

    router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    router.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        })

    router.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.get('/api/current_user', (req, res) => {
        console.log("==========================================================================================================");
        console.log("HTTP GET REQUEST /api/current_user")
        console.log(req.user);
        res.send(req.user);
    });

    module.exports = router;