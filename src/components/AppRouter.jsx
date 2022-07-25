import React, {useContext, useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import Posts from "../pages/Posts";
import {AuthContext} from "../context";
import {CircularProgress} from "@mui/material";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <CircularProgress/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.id}
                    />
                )}

                <Route
                    path="*"
                    element={<Navigate to="posts" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.id}
                    />
                )}

                <Route
                    path="*"
                    element={<Navigate to="login" replace />}
                />
        </Routes>
    );
};

export default AppRouter;