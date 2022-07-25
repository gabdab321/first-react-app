import React, {useContext} from 'react';
import "../../styles/App.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = (e) => {
        e.preventDefault()

        setIsAuth(false)
        localStorage.removeItem("auth")
    }

    return (
        <nav className="navbar">
            <Link to="/about" >About</Link>
            <Link to="/posts" >Posts</Link>
            <a onClick={logout}>LogOut</a>
        </nav>
    );
};

export default Navbar;