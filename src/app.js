const compression = require("compression")
const express = require("express")
const { default: helmet } = require("helmet")
const morgan = require("morgan")


const app = express()


// init middleware
app.use(morgan("dev"))
// morgan có 5 option
// morgan("dev") 
// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")
app.use(helmet()) 
app.use(compression())




// init db 
require("./dbConnects/init.mongodb")
const { checkOverLoad } = require("./helpers/check.connect.mongodb")
checkOverLoad()

// init router 
app.get("/",(req,res) => res.send("ok"))

// handling error



module.exports = app


