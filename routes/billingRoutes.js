const express = require('express');
const router = express.Router();
const charge = require('./charge');
const { saveUser } = require('./save');
const requireLogin = require('../middlewares/requireLogin');

router.post('/api/stripe', requireLogin, async (req, response) => {
    console.log("===================================================");
    console.log("HTTTP POST REQUEST /api/stripe");
    console.log(req.user);
    console.log(req.body);

    const result = await charge();

    const user = req.user;
    user["credits"] += 5;
    await saveUser(user);

    response.send(user);
});

module.exports = router;