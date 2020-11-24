import React from "react";

const UserContext = React.createContext({
    isLoggedin: false,
    userData: null,
    postsData: "",
    reasonsData: ""
});

export default UserContext;
