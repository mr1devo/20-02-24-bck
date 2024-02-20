const mongoose =require("mongoose")

let sr=mongoose.Schema;
const Signupschema=new sr({
  username: String,
  email: String,
  password: String,
});

var Signupmodel=mongoose.model("Signup",Signupschema)
module.exports=Signupmodel;
