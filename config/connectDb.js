const mongoose = require("mongoose");


const connect = () => {
    mongoose
    .connect(
        "mongodb+srv://ws-mongoose:ws-mongoose@cluster0.pdfnvds.mongodb.net/ ")
    .then(()=> console.log("database connected !!"))
    
    .catch((err) => console.log(err));
};
  
module.exports = connect ;