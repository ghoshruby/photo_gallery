import { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'

import logo from '../images/pin.jpg';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 15 }
    const avatarStyle = { backgroundColor: '#F01F23' }
    const marginTop = { marginTop: 5 }

    let [user, setUser] = useState({
        name:"", email: "", password: ""
    });

    let name,value;

    let handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    var userData = async (e) => {
        e.preventDefault();
        let {name,email,password} = user;

        let res = await fetch("/newsignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,password
            })
        });
 
        let newdata = await res.json();

        if (newdata.status === 402 || !newdata) {
            window.alert("Registration Unsucessful");
        } else {  
            window.alert("Registration Sucessful");
        }
   }

    return (
        <div>
        <Grid>
            <Paper style={paperStyle}>
                    <Grid align='center'>
                       
                        <img src ={logo} classname ='App-logo' alt="logo"></img>   
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                <form method="POST">
                    <TextField fullWidth label="Username" type ="text" placeholder="Enter your name" name="name" value={user.name} onChange={handleInput}/>
                    <TextField fullWidth label="Email" type="email" placeholder="Enter your email" name="email" value={user.email} onChange={handleInput} />
                <TextField fullWidth label="Password" type="password" placeholder="Enter your password" name="password" value={user.password} onChange={handleInput}/>
                            
                    <br/>
                    <br/>
                    <Button variant='contained' color='secondary' type='submit' onClick={userData}>
                        Signup
                    </Button>
                </form>
             </Paper>
        </Grid> 
</div>



    )
}

export default Signup;


