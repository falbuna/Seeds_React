import { Route, withRouter} from "react-router-dom";
import React, { useState, useEffect } from "react";

import isAuthenticated from "../../utils/isAuthenticated";
import Auth from "../../utils/Auth";


function AuthenticatedRoute({Component, Path, history}) {

    const [isAwaitingAuthentication, setIsAwaitingAuthentication] = useState(true);
    const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);

    useEffect(function () {
        let mounted = true;
        Auth.getUser()
        .then(function (result) {
            if(mounted){
                setIsAuthenticatedState(isAuthenticated(result));
                setIsAwaitingAuthentication(false);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
        return () => mounted = false;
    });
    
    useEffect(function() {
        if (!isAuthenticatedState && !isAwaitingAuthentication) {
            history.push("/login");
        }
    }, [isAwaitingAuthentication, isAuthenticatedState, history])

    return (
        isAwaitingAuthentication
            ? <h1>Authenticating...</h1>
            : isAuthenticatedState
                ? <Route exact path={Path} component={Component} />
                : <h1>failed</h1>
    )
}

export default withRouter(AuthenticatedRoute)