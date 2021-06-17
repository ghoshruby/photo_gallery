let express = require('express');
let mysql = require('mysql');
let jwt = require('jsonwebtoken');
// let session = require('express-session')

// var mycrypto=require('crypto');
var key="password";
var algo='aes256';
// var jwtkey='jwtkey';


let app = express();
app.use(express.json());
let db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "react",
});

app.post("/axioslogin", function (req, res) {

    let {email, password} = req.body;
    console.log('the email is'.email);


    {
        db.query(
            'SELECT * FROM data WHERE email =? and password=?',
            [email, password],
            (err, result) => {
                if (err) {
                    res.send({ err: err })
                }

                if (result.length > 0) {
                    console.log(result[0])

                    let { email, name } = result[0]
                    var user = {
                        userEmail: email,
                        userName: name,
                    }

                    const tokenCode = jwt.sign(user, "secretKey");
                    res.status(200).send({ access: tokenCode })
                    console.log("login Sucessful")


                } else {
                    res.status(404).send({ message: 'Invalid Credential' });
                    console.log('Invalid Credential')
                }
            }
        )
    }
});


app.listen(4992,()=>{
    console.log("server is running on port 4992");
    })