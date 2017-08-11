const users=require('../../server-src/controllers/users.server.controller');
const passport = require('passport');

module.exports=(app)=>{
    app.route('/users')
        .post(users.create)
        .get(users.list);
        
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
        
    app.param('userId',users.userByID);

    app.route('/api/auth/signup')
    //    .get(users.renderSignup)
       .post(users.signup);

    app.route('/api/auth/signin')
    //    .get(users.renderSignin)
       .post(passport.authenticate('local',{
                successRedirect:'/',
                failureRedirect:'/signin',
                failureFlash:true
       }));
    app.get('/api/auth/signout',users.signout);

    app.get('/api/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));

    app.get('/api/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    app.get('/api/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }));

    app.get('/api/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    app.get('/api/oauth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }),function(req, res) {

   //***HERE this causes that error
              //cookies.setCookie(res, 'NAME', 'VALUE');
   //
    
  	console.log("Google Login successfull");

    res.redirect('/');}
    );

    app.get('/api/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
};