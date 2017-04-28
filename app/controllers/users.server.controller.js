const User= require('mongoose').model('User');
const passport = require('passport');

exports.requireLogin=(req,res,next)=>{
    if(!req.isAuthenticated){
        return res.status(401).send({message:'User is not logged in'});
    }
    next();
};

exports.saveOAuthUserProfile = function(req, profile, done) {
  User.findOne({
    provider: profile.provider,
    providerId: profile.providerId
  }, function(err, user) {
    if (err) {
      return done(err);
    } else {
      if (!user) {
        const possibleUsername = profile.username ||
        ((profile.email) ? profile.email.split('@')[0] : '');

        User.findUniqueUsername(possibleUsername, null,
        function(availableUsername) {
          profile.username = availableUsername;

          user = new User(profile);
          user.save((err) => {
            if (err) {
              const message = _this.getErrorMessage(err);
              console.log("Check _this meaning");
              console.log(_this);
              req.flash('error', message);
              return res.redirect('/signup');
            }

            return done(err, user);
          });
        });
      } else {
        return done(err, user);
      }
    }
  });
};

getErrorMessage=(err)=>{
    let message='';
    if (err.code){
        switch(err.code){
            case 11000:
            case 11001:
               message='Username already exists';
               break;
            default:
               message='Something went wrong';
        }
    }else{
        for (let errName in err.errors){
            if (err.errors[errName].message)
                 message=err.errors[errName].message;
        }
    }
    console.log('Error message in getErrorMessage');
    console.log(message);
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
exports.signin=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err||!user){
            res.status(400).send(info);
        }else{
            user.password=undefined;
            user.salt=undefined;
            req.login(user,(err)=>{
               if(err){
                res.status(400).send(err);
               }else{
                res.json(user);
               }
            });
        }
    })(req,res,next);
};
// exports.signup=(req,res,next)=>{
    // if(!req.user){
    //     const user=new User(req.body);
    //     user.provider='local';
    //     user.save((err)=>{
    //         if(err){
    //             const message=getErrorMessage(err);
    //             req.flash('error',message);
    //             return res.redirect('/signup');
    //         }
    //         req.login(user,(err)=>{
    //             if(err) return next(err);
    //             return res.redirect('/');
    //         });
    //     });
    // }else{
    //     return res.redirect('/');
    // }
// };
exports.signup = function(req, res) {
  const user = new User(req.body);
  user.provider = 'local';

  user.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      req.login(user, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(user);
        }
      });
    }
  });
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