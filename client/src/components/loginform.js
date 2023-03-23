import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login(){

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    let handleLogin = ()=>{
        // fetch
       setIsLoggedIn(true);
    }

    if(isLoggedIn){
        return <Redirect to="/Portfolio" />
    }

return(
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
        <form id="login" action="" class="input-group">
            <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="User Name"  required/>
            </div>
            <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter Password" required/>
            </div>

            <button onClick = {()=>{
                handleLogin()
            }} type="submit" class="submit-btn">Login</button>
        </form>
    </div>
</div>
)
}

export default Login;