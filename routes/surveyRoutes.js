const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredit');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { saveSurvey } = require('./save')

const Survey = mongoose.model('surveys');
router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
    });

    // Great place to send an email.
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
        await mailer.send(()=>{
            console.log('Mail Sent');
        });
    } catch (err) {
        res.status(422).send(err);
    }
    let callback = async () =>{
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);

    }

    saveSurvey(survey, callback);

});


module.exports = router;