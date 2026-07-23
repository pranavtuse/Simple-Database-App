const mongoose = require("mongoose");

if (!process.env.MONGODB_URI) {
    console.error("CRITICAL ERROR: MONGODB_URI is not set in Environment Variables!");
}

mongoose.connect(process.env.MONGODB_URI || "")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.error("MongoDB Connection Error:", err.message));

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String
});

module.exports = mongoose.model("user", userSchema);