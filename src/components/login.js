import "../styles/login.css"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from "../store/actions/userActions";

const Login =(props) =>{
    
return (
   
            <div className="login-box">
               
                    <div className="login-space">
                        <div className="login">
                            <div className="group"> 
                                <label for="user" className="label">Username</label> 
                                <input id="user" type="text" className="input" placeholder="Enter your username"/> 
                            </div>
                            <div className="group"> 
                                <label for="pass" className="label">Password</label> 
                                <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password"/> 
                            </div>
                            <div className="group"> <input id="check" type="checkbox" className="check" checked/> 
                                <label for="check"><span className="icon"></span> Keep me Signed in</label> 
                            </div>
                            <div className="group"> 
                            <input type="submit" className="button" value="Sign In"/> 
                            </div>
                            <div className="hr"></div>
                            <div className="foot"> <a href="#">Forgot Password?</a> </div>
                        </div>
                    </div>
                
            </div>
  
    
);
}



export default Login;