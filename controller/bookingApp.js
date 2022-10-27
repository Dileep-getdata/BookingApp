const User=require('../models/userDetail');

exports.getUserDetails=async(req,res,next)=>{
    const usersList=await User.findAll();    
    res.status(201).json({alluser: usersList});
}

exports.postAddedDetails=async(req,res,next)=>{
    try{
        if(!req.body.phoneno){
            throw new Error("Phone no is manditory");
        }
    // console.log(req.body);
    const username=req.body.username;
    const phoneno=req.body.phoneno;
    const email=req.body.email;
    const data=await User.create({username:username,email:email,phoneno:phoneno});
    res.status(201).json({newUserDetails:data});
    }catch(err){
        res.status(500).json({error:err});
    }
}

exports.deleteUser=async(req,res,next)=>{
    const proId=req.params.id;
    await User.destroy({where:{id:proId}});
    res.sendStatus(200);
}

exports.editUser=async(req,res,next)=>{
    try{       
        const proId=req.params.id;
        console.log(proId)
       const editDetails= await User.findAll({where: { id:proId}});       
        res.status(201).json({idDetails: editDetails}); 
        
    }catch(err){
        console.log(err);
    }    
}