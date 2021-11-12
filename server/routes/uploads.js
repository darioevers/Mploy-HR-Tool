const express=require("express");
//const uploads=require("../functions/uploads");
const singleFileUpload=require("../controllers/photoUpload");
const router=express.Router();
const multer=require("multer");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const uploads =multer();

router.post("/singlefile",uploads.single("file"),async function(req,res,next){
    try {
         const{file}=req;

  const fileName = name + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../server/uploads/${fileName}`)
  );

  res.send("File uploaded as " + fileName);
        
    } catch (error) {
        res.send(error)
        
    }
   
});



module.exports=router;