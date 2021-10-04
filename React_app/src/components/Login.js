import React, { useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';


import logo from '../images/pin.jpg';
import Axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router';

const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'50vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#F01F23'}
    const btnstyle={margin:'8px 0'}

    let history = useHistory();

    let [user, setUser] = useState({
        email: "", password: ""
    });

    let name, value;

    let handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    var userData = async (e) => {
        e.preventDefault();
        let { email, password } = user;

        Axios.post('/axioslogin', {
            email: email,
            password: password,

        }).then((result) => {
            console.log(result)
            if (result.data.access) {
                const token1 = result.data.access;
                localStorage.setItem('token', token1)
                let user = jwt(token1)
                console.log(user);

                window.alert("Login Sucessful")
                history.push('/business')

            } else {
                if (result.data.message) {
                    window.alert("Login Unsucessful")
                }

            }
        })

    }


    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                    
                     <img src ={logo} classname ='App-logo' alt="logo"></img>  
                     <br/>
                     <br/>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required name="email" value={user.email} onChange={handleInput}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required name="password" value={user.password} onChange={handleInput}/>
                {/* <Button type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth onClick={userData}>Sign in</Button> */}
<br/>

                <Button variant="contained" color='secondary' type="submit" onClick={userData}>
            Login                       
        </Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;