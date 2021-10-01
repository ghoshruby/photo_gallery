import React, { useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import Footer from './Footer';


function About() {

    return(
        <div
        class="about_image"
     
      >
          <br/>
          <br/>
       
        <h1 className="font5">When it comes to a  
        <p>great idea, you know</p> 
        <p>it when you see it.</p></h1>
        <br/>
        <Button style={{backgroundColor:"#B50956",color:"white",width:"200px",marginLeft:"-67%",fontSize:"120%"}}  href="https://www.gmitkolkata.org/"  type="submit"  onClick >
            <b>Know GMIT </b>
                           
        </Button>
        <br/>
        <br/>
        <br/>
        <br/>
      <Footer/>
      </div>
    )
}

export default About;