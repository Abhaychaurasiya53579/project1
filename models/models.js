const mongoose = require("mongoose");
const contactschema = new mongoose.Schema({

   name : {
    type:String,
    rquired:true

    },
    email:{
        type:String,
        required:true,
        //unique :true
        
    },
    password:{
        type:String,
        required:true
    },
},
    {timestamps:true}

);

const contact= mongoose.model('users',contactschema);
module.exports=contact;