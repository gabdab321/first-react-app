import React from 'react';
import "../../styles/App.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/about" >About</Link>
            <Link to="/posts" >Posts</Link>
        </nav>
    );
};

export default Navbar;