const mongoose = require("mongoose");
const { stringify } = require("querystring");
const postschema = new mongoose.Schema({
content:{
    type:String,
    required:true
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
},
comments:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"

    }
]




},{
    timestamps:true
})
const post = mongoose.model("post",postschema);
module.exports = post;
