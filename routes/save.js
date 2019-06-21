module.exports = (user) => {
    console.log("SAVING====================")
    user.save((err, saved)=>{
        if (err){
            console.log(err);
        }else{
            console.log("Saved");
            console.log(saved);
        }
    });
};