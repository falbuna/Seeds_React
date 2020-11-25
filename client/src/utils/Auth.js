import Axios from "axios";


export default {

    login: function (loginUsername, loginPassword) {
        return Axios({
            method: "POST",
            data: {
                email: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "auth/login",
        })
    },

    getUser: function () {
        return Axios({
            method: "GET",
            withCredentials: true,
            url: "auth/user",
        })
    },

    register: function (registerName, registerUsername, registerPassword) {
        return Axios({
            method: "POST",
            data: {
                name: registerName,
                email: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "auth/register",
        }).then((res) => {});
    },

    logout: function () {
        return Axios({
            method: "GET",
            withCredentials: true,
            url: "auth/logout",
        }).then((res) => {});
    }
}