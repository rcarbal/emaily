function saveUser (user){
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

function saveSurvey(survey, callback){
    survey.save((err, survey)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Survey Saved");
                callback();
            }
    });
};

module.exports ={
    saveUser,
    saveSurvey
}