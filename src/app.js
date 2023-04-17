
//DECLARATIONS CONST
const express = require("express");
const path = require("path")
const multer = require("multer")
const app = express();
const logger = require("morgan")



const storage = multer.diskStorage({
    destination:path.join(__dirname, "public/images"),
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})
//SETTINGS

app.set("port",3000);
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs")


//MIDDLEWARES
app.use(logger("dev"))

app.use(multer({
    storage,
    dest: path.join(__dirname, "public/images")
}).single("imagen"));



//ROUTES

app.use(require("./routes/index"))

//STATIC



module.exports= app;






