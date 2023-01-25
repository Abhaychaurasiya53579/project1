const passport = require("passport");
const localstrategy = require("passport-local").Strategy;
const User= require("../models/models");





passport.use( new localstrategy({
usernameField:"name"},
  async function(name,password,done){
const user =  await User.findOne({name:name});

if(!user || password!=user.password){
    console.log("invalid username or password");
return done(null, false);
}
else{
    return done(null,user);
}
}
));



passport.serializeUser(function(user,done){
    return done(null,user.id);
}
)

passport.deserializeUser( async function(id,done){
    const user =  await User.findById(id);
    return done(null,user);
})

//checking validity of cookie
passport.check_authentication = function(req,res,next){
    // console.log("found");
    //if user is authentic then pass the controller
    if(req.isAuthenticated()){
        
        return next();
    }
    //if not authentic
    else{
        console.log("redirected");
        return res.redirect("/user/sign-in");
    }
  
}

passport.set_authenticated_user= function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contain information from session cookie and we are trasferring to response
        res.locals.user =req.user; 
    }
    return next();
}

module.exports = passport;