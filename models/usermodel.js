const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);