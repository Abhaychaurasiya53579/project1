const mongoose = require("mongoose");
const { stringify } = require("querystring");
const postschema = new mongoose.Schema({
content:{
    type:String,
    required:true
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
}




})