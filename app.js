const express=require('express');
const server=express();
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer');
const mongoose=require('mongoose');
const DB='mongodb+srv://rohit:Rohit30522@cluster0.f7ieg.mongodb.net/?retryWrites=true&w=majority';

const Info=require('./Model/Info');
const user=require('./Model/user')
server.use(bodyParser.json());

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

var transporter=nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth:{
        user:'rohitmanathiya1tp@gmail.com',
        pass:'RohitM@12'
    }
});



server.post('/api/insert',(req,res)=>{
    let userinfo=new Info(req.body);
    // console.log(req.body.first_name);
    userinfo.save((err,info)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        var mailOptions={
            from:'rohitmanathiya1tp@gmail.com',
            to:info.email,
            subject:'You data details',
            text:`Hi ${info.first_name}, Your data is saved in Data base and your data is ${Info}`
        }
        transporter.sendMail(mailOptions,(err,userinfo)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Email send");
            }
        })
        res.json({
            userInfo:info
        })
    })
})

server.get('/getuser',(req,res)=>{
    Info.find((err,user)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        if(!user){
            return res.status(400).json({
                msg:"No user find"
            })
        }
        res.json({
            data:user
        })
    })
})

















server.listen(5000,()=>{
    console.log("listning at",5000);
})