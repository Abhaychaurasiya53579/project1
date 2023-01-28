const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const avtaar_path = path.join("/uploads/users/avtaar");

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
    avtaar:{
        type:String
    }
},
    {timestamps:true}

);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"..",avtaar_path))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  //static functions
  contactschema.statics.uploadavtaar=multer({storage:storage}).single("avtaar");
  contactschema.statics.avtaarpath = avtaar_path;

const contact= mongoose.model('users',contactschema);
module.exports=contact;