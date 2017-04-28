exports.render = (req,res) => {
    if (req.session.lastVisit){
        console.log(req.session);
        console.log("Show session: "+req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    
    const user = (!req.user) ? null : {
        _id:req.user.id,
        firstName:req.user.firstName,
        lastName:req.user.lastName
    }
    res.render('index',{
               title:'World',
               subtitle:'Hello Jiangxi',
               userFullName: req.user ? req.user.fullName : 'None',
               user:JSON.stringify(user)
        });
};