const comment = require("../models/comments");
const post_ = require("../models/post");

module.exports.create = function(req,res){

   post_.findById(req.body.post,function(err,post){

  if(post){
    comment.create({
       content : req.body.content,
       post:req.body.post,
       user:req.user._id

    },function(err,comment){
    post.comments.push(comment);
    post.save();
    })
  }


   })
   return res.redirect("back");

}

//delteing comment
module.exports.destroy =  async function(req,res){
    const com=  await comment.findById(req.params.id.trim());
    if(com.user== req.user.id){
        post_id = com.post;
     com.remove();
       post_.findByIdAndUpdate(post_id,{$pull :{comments: req.params.id.trim()}} )
    }

    return res.redirect("back");
}




