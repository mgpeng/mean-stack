const User= require('mongoose').model('User');
const passport = require('passport');

exports.saveOAuthUserProfile = function(req, profile, done) {
  User.findOne({
    provider: profile.provider,
    providerId: profile.providerId
  }, (err, user) => {
    if (err) {
      return done(err);
    } else {
      if (!user) {
        const possibleUsername = profile.username || 
                                 ((profile.email) ? profile.email.split('@')[0] : '');

        User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
          const newUser = new User(profile);
          newUser.username = availableUsername;
          newUser.save((err) => {
            return done(err, newUser);
          });
        });
      }else{
        return done(err, user);
      }
    }
  });
};


getErrorMessage=(err)=>{
    let message='';
    if (err.code){
        console.log('err.code');
        console.log(err.code);
        switch(err.code){
            case 11000:
            case 11001:
               message='Username already exists';
               break;
            default:
               message='Something went wrong';
        }
    }else{
         console.log('err.errors');
         console.log(err.errors);
        for (let errName in err.errors){
            if (err.errors[errName].message)
                 message=err.errors[errName].message;
        }
    }
    return message;
};
exports.renderSignin=(req,res,next)=>{
    if(!req.user){
        res.render('signin',{
                   title:'Sign-in form',
                   messages:req.flash('error')||req.flash('info')
                });
    }else{
        return res.redirect('/');
    }
};
exports.renderSignup=(req,res,next)=>{
    if(!req.user){
        res.render('signup',{
                   title:'Sign-up form',
                   messages:req.flash('error')
                });
    }else{
        return res.redirect('/');
    }
};
exports.signup=(req,res,next)=>{
    if(!req.user){
        const user=new User(req.body);
        user.provider='local';
        user.save((err)=>{
            if(err){
                const message=getErrorMessage(err);
                req.flash('error',message);
                return res.redirect('/signup');
            }
            req.login(user,(err)=>{
                if(err) return next(err);
                return res.redirect('/');
            });
        });
    }else{
        return res.redirect('/');
    }
};
exports.signout=(req,res)=>{
    req.logout();
    res.redirect('/');
};
exports.create=(req,res,next)=>{
    const user=new User(req.body);
    user.save((err)=>{
        if (err){
            return next(err);
        }else{
            res.status(200).json(user);
        }
    });
};
exports.list=(req,res,next)=>{
    User.find({},(err,data)=>{
        if (err){
            return next(err);
        }else{
            res.status(200).json(data);
        }
    })
}
exports.read=(req,res)=>{
    res.json(req.user);
};
exports.userByID=(req,res,next,id)=>{
    User.findOne({
        _id:id
    },(err,user)=>{
        if (err){
            return next(err);
        }else{
            req.user=user;
            next();
        }
    });
};
exports.update=(req,res,next)=>{
    User.findByIdAndUpdate(req.user.id,req.body,{
        'new':true},(err,user)=>{
            if (err){
                return next(err);
            }else{
                res.status(200).json(user);
            }
    });
};
exports.delete=(req,res,next)=>{
    req.user.remove((err,user)=>{
            if (err){
                return next(err);
            }else{
                res.status(200).json(user);
            }
    });
};