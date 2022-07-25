import React from "react";
import "./styles/App.css"
import Posts from "./pages/Posts";
import About from "./pages/About";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error";

function App() {

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/error" element={<Error/>} />
                    <Route
                        path="*"
                        element={<Navigate to="/error" replace />}
                    />
            </Routes>
        </BrowserRouter>
);
}

export default App;