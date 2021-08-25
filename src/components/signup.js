import React, { useState } from "react";
import "../styles/signup.module.css"
import { useDispatch } from "react-redux";
import { signupUser } from "../store/actions/userActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Signup() {
    //States required to signup
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [warning, setWarning] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();

    //Signing up method - dispatcing states to signupUser action
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === repeatedPassword) {
            dispatch(signupUser(name, surname, email, phone, password))
            history.push("/login")
        } else {
            setWarning("Şifreler eşleşmiyor.")
        }
        { password === repeatedPassword ? (dispatch(signupUser(name, surname, email, phone, password))) : (setWarning("Şifreler eşleşmiyor.")) }


    }
    return (
        <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                <h4 className="card-title mt-3 text-center" style={{ color: "#FA1E0E", fontWeight: "bold" }}>Hesap Oluştur</h4>
                <p className="text-center" style={{ color: "#FA1E0E" }}>Kendinize ücretsiz bir hesap oluşturun.</p>


                <form onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Ad" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Soyad" type="text" onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="E-posta Adresi" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>

                        <input name="" className="form-control" placeholder="Telefon Numarası" type="text" onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input className="form-control" placeholder="Parola" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" style={{ color: "#FA1E0E" }}></i> </span>
                        </div>
                        <input className="form-control" placeholder="Parola (Tekrar)" type="password" onChange={(e) => setRepeatedPassword(e.target.value)} />
                        <hr></hr>
                        <p>{warning}</p>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block custom-btn-warning"> Hesap Oluşturun  </button>
                    </div>
                    <p className="text-center" style={{ color: "#BD2000" }}>Hesabınız var mı? <a href="/login" style={{ color: "#BD2000" }}>Giriş Yapın.</a> </p>
                </form>
            </article>
        </div>

    );
}