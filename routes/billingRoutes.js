const charge = require('./charge');
const save = require('./save');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe',requireLogin, async (req, response) => {
        console.log("===================================================");
        console.log("HTTTP POST REQUEST /api/stripe");
        
        const result = await charge();

        const user = req.user;
        user["credits"] += 5;
        await save(user);
       
        response.send(user);

        
    });
}