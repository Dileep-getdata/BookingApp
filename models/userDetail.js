const Sequelize=require('sequelize');

const sequelize=require('../util/userDB');

const User=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        unique:true
    },
    phoneno:{
        type:Sequelize.STRING,
        unique:true
    }
});
module.exports=User;