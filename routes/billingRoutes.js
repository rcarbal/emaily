const charge = require('./charge');
const save = require('./save');

module.exports = app => {
    app.post('/api/stripe', async (req, response) => {
        console.log("===================================================");
        console.log("HTTTP POST REQUEST /api/stripe");
        if(!req.user){
            return response.status(401).send({error: 'You Must Log In'});
        }

        const result = await charge();

        const user = req.user;
        user["credits"] += 5;
        await save(user);
       
        response.send(user);

        
    });
}