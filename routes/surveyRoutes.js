const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredit');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { saveSurvey } = require('./save')

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks so much for voting');
    });

    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        console.log("Inside POST /api/surveys")
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
        sendMail(survey)
            .then((data) => {
                console.log(data);
                console.log("Deduction from user ===========================");
                saveSurvey(survey);
                req.user.credits -= 1;
                const user = req.user;
                user.save();
                res.send(user);
            })
    });

    function sendMail(survey) {
        return new Promise((resolve, reject) => {
            console.log("Sending Mail==============================");
            const mailer = new Mailer(survey, surveyTemplate(survey));
            try {
                mailer.send(() => {
                    console.log('Mail has been sent Sent');
                    
                });
                console.log('Mail Sent');
                resolve(true);
            } catch (err) {
                res.status(422).send(err);
            }
        });
    }
}