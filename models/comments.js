const mongoose= require("mongoose");
const commentschema = new mongoose.Schema(
    {
content:{
    type:String,
    required:true
},
post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
}



    }
)

const comment = mongoose.model("comment",commentschema);
module.exports= comment;