import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/signup.css"
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../store/actions/userActions";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Signup(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [warning, setWarning] = useState("");
    
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        {password===repeatedPassword?(dispatch(signupUser(name, surname, email, phone, password))):(setWarning("Şifreler eşleşmiyor."))}
        
    }
    return (
        <div className="card bg-light">
            <article className="card-body mx-auto" style={{maxWidth: "400px"}}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <p>
                    <a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
                    <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
                </p>
                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Ad" type="text" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Soyad" type="text" onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Email address" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select" style={{maxWidth: "120px"}}>
                            <option selected="">+90</option>
                        </select>
                        <input name="" className="form-control" placeholder="Phone number" type="text" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Create password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Repeat password" type="password" onChange={(e) => setRepeatedPassword(e.target.value)}/>
                        
                        <p>{warning}</p>                    
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <a href="">Log In</a> </p>
                </form>
            </article>
        </div>

    );
}