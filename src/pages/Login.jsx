import React, {useContext} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import "../styles/App.css"
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()

        setIsAuth(true)
        localStorage.setItem("auth", true)
    }

    return (
        <div className="login">
            <h1>Login Page</h1>
            <form>
                <MyInput style={{marginTop: "15px"}} type="text" placeholder="username"/>
                <MyInput style={{marginTop: "15px"}} type="password" placeholder="password"/>
                <MyButton onClick={login}>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;