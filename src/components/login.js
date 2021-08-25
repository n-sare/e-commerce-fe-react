import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userActions";

import "../styles/signup.module.css"

export default function Login() {
    //Defining states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //We need useDispatch so that we can dispatch action in redux store
    const dispatch = useDispatch();

    //Validating form so user can't try to login if s/he didn't fill out requirements
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    //handleSubmit handles submit and dispatches to loginUser action (method)
    //loginUser turns isLoggedIn from false to true and saves userInfo to localStorage
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(loginUser(email, password));
    }


    return (
        <div className="card bg-light ">
            <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                <h4 className="card-title mt-3 text-center" style={{ color: "#FA1E0E", fontWeight: "bold" }}>Giriş Yap</h4>


                <form onSubmit={handleSubmit} className="form-login">

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="E-posta Adresi" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input className="form-control" placeholder="Şifre" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block custom-btn-warning" disabled={!validateForm()}> Giriş Yap  </button>
                    </div>
                    <p className="text-center" style={{ color: "#BD2000" }}>Hesabınız yok mu? <a href="/signup" style={{ color: "#BD2000" }}>Kaydolun.</a> </p>
                </form>
            </article>
        </div>
    );
}