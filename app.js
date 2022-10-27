const express=require('express');
const bodyparser=require('body-parser');
const User=require('./models/userDetail');
const sequelize=require('./util/userDB');
const dataController=require('./controller/bookingApp');

var cors=require('cors');
const { where } = require('sequelize');
// const { userInfo } = require('os');
const app=new express();
app.use(bodyparser.json({ extened:false }));
app.use(cors());


// Add user to database using sequelize
app.post('/user/add-user',dataController.postAddedDetails);

app.get('/user/get-user',dataController.getUserDetails);

// Editing the user details
app.get('/user/edit-idPost/:id',dataController.editUser);

// Deleting the user ID
app.delete('/user/delete-userId/:id',dataController.deleteUser);



sequelize.sync()
.then(response=>{
    app.listen(3000);
}).catch(err=>console.log(err));
