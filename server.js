require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const userModel = require('./models/usermodel');

app.get('/',(req,res) => {
    res.render("index");
})

app.get('/read', async (req, res) => {
    try {
        let users = await userModel.find();
        res.render("read", { users });
    } catch (err) {
        console.error("Error reading users:", err);
        res.status(500).send("Database error: Could not fetch users.");
    }
});

app.get('/edit/:id', async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.render("edit", { user });
    } catch (err) {
        console.error("Error fetching user for edit:", err);
        res.status(500).send("Database error: Could not fetch user.");
    }
});

app.post('/update/:id', async (req, res) => {
    try {
        let { image, name, email } = req.body;
        await userModel.findOneAndUpdate({ _id: req.params.id }, { image, name, email }, { new: true });
        res.redirect("/read");
    } catch (err) {
        console.error("Error updating user:", err);
        res.status(500).send("Database error: Could not update user.");
    }
});

app.post('/create', async (req, res) => {
    try {
        let { name, email, image } = req.body;
        await userModel.create({
            name: name,
            email: email,
            image: image
        });
        res.redirect("/read");
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Database error: Could not create user.");
    }
});

app.get('/delete/:id', async (req, res) => {
    try {
        await userModel.findOneAndDelete({ _id: req.params.id });
        res.redirect("/read");
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send("Database error: Could not delete user.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



//app.get('/create',async (req,res) => {
//     let createduser = await userModel.create({
//         name: "aditya",
//         email: "aditya@gmail.com",
//         username: "aditya"
//     })

//     res.send(createduser);
// })

// app.get('/update',async (req,res) => {
//     let updateduser = await userModel.findOneAndUpdate({username: "aditya"},{name: "ombhai patil"});
//     res.send(updateduser);
// })

// app.get('/read',async (req,res) => {
//     let users = await userModel.find();
//     res.send(users);
// })

// app.get('/delete',async (req,res) => {
//     let users = await userModel.findOneAndDelete({username: "pranav"});
//     res.send(users);
// })