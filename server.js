const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const userModel = require('./models/usermodel');

app.get('/',(req,res) => {
    res.render("index");
})

app.get('/read', async(req,res) => {
    let users=await userModel.find();
    res.render("read", {users});
})

app.get('/edit/:id', async(req,res) => {
    let user=await userModel.findOne();
    res.render("edit", {user});
})

app.post('/update/:id', async(req,res) => {
    let {image,name,email}=req.body;
    let user=await userModel.findOneAndUpdate({_id: req.params.id},{image,name,email},{new:true});
    res.redirect("/read");
})

app.post('/create', async(req,res) => {
    let {name,email,image}=req.body;

    let createduser=await userModel.create({
        name: name,
        email: email,
        image: image
    })
    res.redirect("/read");
})

app.get('/delete/:id', async(req,res) => {
    let users=await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})

app.listen(3000 , function() {
    console.log("its running");
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