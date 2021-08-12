import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/login.css"
import { useDispatch, useSelector } from "react-redux";
import {loginUser, setCurrentUser, getUsers} from "../store/actions/userActions";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Login2(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = useSelector(state => state.user);
  const {user, isLoggedIn} = userData
  const history = useHistory();

  const dispatch = useDispatch();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(email, password));
    
  }


  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}> 
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => {
              console.log(isLoggedIn)
              setEmail(e.target.value)}}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} >
          Login
        </Button>
      </Form>
    </div>
  );
}