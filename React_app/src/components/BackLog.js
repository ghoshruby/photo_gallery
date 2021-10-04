import React from 'react';
import SignInOutContainer from '../containers';
import login from "../images/login.png"

function BackLog() {
    return(
        <div>
             <style>{'body { background-color: #E0C7EE; }'}</style>
            <SignInOutContainer/> 
             <img style={{width:"650px",height:"500px",marginLeft:"40%",marginTop:"-50%" }} src ={login} classname ='App-logo' ></img> 
          <br/>
          <br/>
           
       
      </div>
    )
}

export default BackLog;