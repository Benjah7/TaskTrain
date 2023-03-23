import React, { useState } from "react";
import { NavLink, Redirect } from 'react-router-dom'



function LoginPage () {
    const[isSignedIn,setIsSignedIn]= useState(false)
const[first_name,setFirstName] = useState("")
    const[last_name,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

let handleSignup = ()=>{
    let userObj = {
        first_name,
        last_name: first_name,
        email,
        password_digest: password
    }
    console.log(userObj)
    fetch(`https://phase-3-project.onrender.com/add/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then((response)=>{
        console.log(response)
        if(response.ok){
            setIsSignedIn(true)
        }
        else{
            alert('Could not sign in')
        }
    })
}

if(isSignedIn){
    return <Redirect to="/login"/>
}

    return (
        <div class="hero">
        <div class="form-box left">
            <div class="info">
            <img className="icon" src="https://img.icons8.com/ios/1x/user--v3.gif"></img>
            <br />
                <h2>Craniun studio</h2>
                <div class="contact-info">
                    <p>P.O box 245-001,</p>
                    <p>Nairobi,</p>
                    <p>Kenya</p>
                </div>
                <div class="icons">
                    <div class="contact">
                        <i class="fas fa-phone"></i>
                        <p>Tel:+254 706 349 194</p>
                    </div>
                    <div class="contact">
                        <i class="fas fa-envelope"></i>
                        <p>Email: craniunstudio.photography@gmail.com</p>
                    </div>
                </div>
                <div class="navigation">
                <img className="icon" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/1x/external-home-user-interface-tanah-basah-glyph-tanah-basah.png"></img>
                <br/>
                <br/>
                    <a href="./HomePage">Back to home</a>
                    <i class="fas fa-arrow-left"></i>
                </div>
            </div>
        </div>
        <div class="form-box right">
            {/* <form id="login" action="" class="input-group">
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="User Name"  required/>
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Enter Password" required/>
                </div>
    
                <button type="submit" class="submit-btn">Login</button>
            </form> */}

            <form id="login" action="" class="input-group">
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input onChange={(e)=>{
                        setFirstName(e.target.value);
                    }} type="text" placeholder="User Name" value={first_name} required/>
                </div>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                    }} type="email" placeholder="User Email" value={email}required/>
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input onChange={(e)=>{
                        setPassword(e.target.value);
                    }} type="password" placeholder="Enter Password" value={password}required/>
                </div>
              
                <button onClick={(e)=>{
                    e.preventDefault();
                    handleSignup()
                }} type="submit" class="submit-btn">Register</button>
              
              
            </form>
        </div>
    </div>
    
    );
}


export default LoginPage;