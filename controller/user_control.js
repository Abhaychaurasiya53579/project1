const { userInfo } = require("os");
const User = require("../models/models");


module.exports.profile = async function(req,res){
    // if(req.cookies.session_cookie){
    //   const user =  await User.findById(req.cookies.session_cookie);
    //   return res.render("profile");

    // }
    // else{
    //     return res.redirect("/user/sign-in");
    // }
   // return res.end("<h1>user profile</h1>");
   return res.render("profile");
}

module.exports.sign_in =function(req,res){
     if(req.isAuthenticated()){
        return res.render("profile");
     }
    return res.render("sign_in");
}
module.exports.sign_up =function(req,res){
    if(req.isAuthenticated()){
        return res.render("profile");
     }
    return res.render("sign_up");
}

module.exports.sign_out= function(req,res){
    req.logout(function(){
        return res.render("sign_up");
    });
    
}

 module.exports.create=  async function(req,res){
    if(req.body.password!=req.body.confirm_password){
        console.log("password are not same");
        return res.redirect("/user/sign-in");
    }
    

    
 const index = await User.findOne({email : req.body.email})

        if(index!=null){

            console.log("found user");
            return res.redirect("/user/sign-in");
           // index = null;
        }
        else{
            console.log("created");
            User.create({
                name:req.body.name,
                password : req.body.password,
                email:req.body.email

            });
            //index = null;
            return res.redirect("/user/sign-in");
        }
    
    
    }

    module.exports.create_session=  async function(req,res){
        // const user =  await User.findOne({name:req.body.name})
        //  res.cookie("user_id",user.id);
        //  return res.render("profile");
        return res.redirect("/");
    }
