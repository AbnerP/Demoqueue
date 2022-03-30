import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartEvent.css";
import LiveQueue from "./LiveQueue";

function StartEvent(){

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        fetch('http://localhost:5000/login', requestOptions).then(res => res.json()).then(data => {
            console.log(data);
            setIsAuthenticated(data.authenticated);
        });
    }, []);

    function onSignup(event){
        if(confirmPasswordInput !== passwordInput){
            alert("Passwords do not match");
            return;
        }
        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: usernameInput, password: passwordInput})
        };
        fetch('http://localhost:5000/sign_up', requestOptions).then(res => res.json()).then(data => {
            console.log(data);
        });
    }

    function onLogin(event){
        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: usernameInput, password: passwordInput})
        };
        fetch('http://localhost:5000/login', requestOptions).then(res => res.json()).then(data => {
            console.log(data);
        });
    }

    let signUpForm = (
      <form className="queueForm" onSubmit={event => onSignup(event)}>
        <input type="text" placeholder="Username" value={usernameInput} onChange={event => setUsernameInput(event.target.value)}/>
        <input type="password" placeholder="Password" value={passwordInput} onChange={event => setPasswordInput(event.target.value)}/>
        <input type="password" placeholder="Confirm Password" value={confirmPasswordInput} onChange={event => setConfirmPasswordInput(event.target.value)}/>
        <button type="submit">Sign Up</button>
      </form>
    );

    let loginForm = (
      <form className="queueForm" onSubmit={event => onLogin(event)}>
        <input type="text" placeholder="Username" value={usernameInput} onChange={event => setUsernameInput(event.target.value)}/>
        <input type="password" placeholder="Password" value={passwordInput} onChange={event => setPasswordInput(event.target.value)}/>
        <button type="submit">Log In</button>
      </form>
    );

    return isAuthenticated ? (
         <div className = "container">
            <h1>CREATE AN EVENT.</h1>
         </div>
        ) : (
            <div className = "container">
                <h1 className = "title">SIGN UP AS AN EVENT HOST.</h1>
                {signUpForm}
                <br /><h2>OR</h2><br />
                <h1 className = "title">LOG IN.</h1>
                {loginForm}
            </div>
        );

}

export default StartEvent;