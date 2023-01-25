const express = require("express");
//const nodemon= require("nodemon");
const db = require('./config/mongodb');
const User = require("./models/models")

const config_passport = require("./config/passport_local")
const session = require("express-session");
const passport = require("passport");
//const passportlocal=require("passport-local");
//const User = require("./models/models")
const app= express();
const port=8000;
const path = require("path")
const cookieparser = require("cookie-parser");
const mongo_connect = require("connect-mongo")(session);
//const express = require("express");
const bodyparser=require("body-parser");
//app.use(bodyparser());
//app.use(express.bodyParser());
const bp = require("body-parser");
const { Session } = require("express-session");
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
//app.use(express.json());
app.use(express.urlencoded());
app.use(cookieparser());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,("./views")));


app.use(session({
    name:"session_cookie",
    secret:"anything",
    saveUnitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*1000)
    },
    //using mongostore to store cookie
    store:   new mongo_connect(
        {
          mongooseConnection:db,
          autoRemove:"disabled"
        }
    )


}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.set_authenticated_user);
//use the router;
app.use('/',require('./routers/index.js'))

app.listen(port,function(err){
    if(err){
        console.log("error  generated");
    }
    else{
        console.log("server is running on port " ,port);
    }
});
