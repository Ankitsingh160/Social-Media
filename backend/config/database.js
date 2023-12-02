const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const url = "mongodb+srv://singhankitkumar334:Ankitsingh160@cluster0.i5lwngh.mongodb.net/SocialApp?retryWrites=true&w=majority";
exports.connectDatabase = () => {
  mongoose
    .connect(url)
    .then((con) => console.log(`Database Connected`))
    .catch((err) => console.log(err));
};
