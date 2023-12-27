"use strict";

const mongoose = require("mongoose");

const connectString = "mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net/";
mongoose
  .connect(connectString)
  .then((_) => console.log("Connect mongodb Success!"))
  .catch((err) => console.log("Connect Error ::: ", err));

if (process.env.production === "dev"){
    mongoose.set("debug", true);
    mongoose.set('debug',{color : 'true'})
} 


// module.exports = mongoose

// nhiều kết nối không cần thiết