const post = require("../models/post");
const comment = require("../models/comments");
const mongoose = require("mongoose");
module.exports.create= function(req,res){
post.create (
    {
     content : req.body.content,
     user:req.user._id

    }
)
return res.redirect("back");
}



//delete a post

module.exports.destroy =  async function(req,res){
console.log(req.params.id);
// if(mongoose.isValidObjectId(req.params.id)){
//     console.log("abhay");
// }
// else{
//     console.log("mama chuda"); 
// }
// mongoose.isValidObjectId(req.params.id);
//const id = mongoose.ObjectId(req.params.id);
  const post_ = await post.findById(req.params.id.trim());
//  console.log(post_);
    if(post_){
//req.user.id used to convert user to string 
console.log(req.user);
console.log(post_);
    if( post_.user == req.user.id){
        console.log("abhay");
        post_.remove();
        comment.deleteMany({post:req.params.id.trim()});
    }

}


return res.redirect("back");

}