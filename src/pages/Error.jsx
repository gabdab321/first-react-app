import React from 'react';
import "../styles/Error.css"
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <p className="error__message">Oops...Error 404 :(</p>
            <Link className="error__redirect" to="/posts">Go to home page</Link>
        </div>
    )
};

export default Error;