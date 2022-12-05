// const mongoURI="mongodb://localhost:27017/iNoteBook";
const mongoURI =
  "mongodb+srv://root:OdthKB9VJf0iMTIv@cluster0.yp0e7.mongodb.net/iNoteBook?retryWrites=true&w=majority";

const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToMongo;
