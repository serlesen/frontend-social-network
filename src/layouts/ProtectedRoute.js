import React from "react";
import {Component} from "react";
import {getAuthToken} from "../helpers";
import {Redirect, Route} from "react-router-dom";
import RegularLayout from "./RegularLayout";

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
            <Route {...rest} render={matchProps => getAuthToken() ? (
                    <RegularLayout>
                        <Component {...matchProps} />
                    </RegularLayout>
            ) : (<Redirect to="/login"/>
            )} />
    )
};

export default ProtectedRoute;