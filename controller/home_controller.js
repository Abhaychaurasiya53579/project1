//const { post } = require("../routers")
const { userInfo } = require("os");
const post = require("../models/post");
const user = require("../models/models")

module.exports.home=  async function(req,res){
    // console.log(req.cookies);
    // return res.render('home',{

    // });
// post.find({},function(err,post){
//     return res.render("home",{
//         posts:post
//     })

// })

const all_user = await user.find({})

post.find({})
.populate("user")
.populate({
    path:"comments",
    populate:{
        path:"user"
    }
}
)
.then(post_=>{res.render("home",{
    post_:post_,
    all_user:all_user
})

})


}




