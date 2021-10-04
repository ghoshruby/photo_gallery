let express = require('express');
let mysql = require('mysql');
var mycrypto=require('crypto');
var key="password";
var algo='aes256';
var jwt=require('jsonwebtoken');
var jwtkey='jwtkey';


let app = express();
app.use(express.json());
let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react",
});



app.post("/newsignup",async (req,res)=>{
    let {name,email, password} = req.body;
    var myCipher= mycrypto.createCipher(algo,key);
    
        var pass=myCipher.update(password,'utf8','hex')
        +myCipher.final('hex');
    
        db.query('INSERT INTO data (name,email,password) VALUES (?,?,?)',
        [name,email,pass],
        (err,result)=>{
            if(err){
                res.status(422).send({err:err})
            }else{
                res.status(201).send({message:'Your data inserted succesfully'})
            }
        });
        console.log("SignupSucessful");   
    
        });
    
app.listen(4992,()=>{
    console.log("server is running on port 4992");
    })
    



// var myApp = require('express');
// var app=myApp();
// app.use(myApp.json());
// var mongooseApp = require('mongoose');
// var myModel=require('./examples');
// var mycrypto=require('crypto');
// var key="password";
// var algo='aes256';
// var jwt=require('jsonwebtoken');
// var jwtkey='jwtkey';


// mongooseApp.connect('mongodb+srv://RubyGhosh:RubyGhosh@cluster0.sdtvp.mongodb.net/React?retryWrites=true&w=majority',
//     {useNewUrlParser : true,
//     useUnifiedTopology : true}
// );


// app.post('/newsignup',function(req,res){

//     let {email, mobile, password} = req.body;
//     var myCipher= mycrypto.createCipher(algo,key);

//     // encrypt the password Advanced Encryption Standard 256 using UTF8 & hex 
//     var pass=myCipher.update(password,'utf8','hex')
//     +myCipher.final('hex');

//     const newdata=new myModel({
//         _id: mongooseApp.Types.ObjectId(),
//         email,mobile,password:pass
//     });
//     newdata.save().then((result)=>{
//         res.status(201).json(result)
//     })

//     .catch(err=>console.log(err))

// })

// app.listen(4992,()=>{
//         console.log("server is running on port 4992");
//         })