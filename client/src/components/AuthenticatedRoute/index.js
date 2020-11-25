import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import isAuthenticated from "../utils/isAuthenticated";


export default function render(props) {

    const [isAwaitingAuthentication, setIsAwaitingAuthentication] = useState(true);
    const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);

    useEffect(function () {
        isAuthenticated()
            .then(function (result) {
                setIsAwaitingAuthentication(false);
                setIsAuthenticated(result);
            })
            .catch(function () {
                setIsAwaitingAuthentication(true);
                setIsAuthenticated(false);
            })
    }, []);

    return (
        isAwaitingAuthentication
            ? <div>Authenticating...</div>
            : isAuthenticatedState
                ? <Route {...props}></Route>
                : <Redirect to={path}></Redirect>
    )
}
