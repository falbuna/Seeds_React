import Axios from "axios";

const API = {
    addPost: ({ day_quality, gratitude, user_id, reason }) => {
        console.log("working")
        return Axios({
            method: "POST",
            data: {
                day_quality: day_quality,
                gratitude: gratitude,
                user_id: user_id,
                reason: reason
            },
            withCredentials: true,
            url: "api/posts",
        }).then((res) => { console.log("OHH YAA") });


    },

    //added by matt milici
    getPost: ({ user_id }) => {

        console.log("get post is being hit")
        return Axios({
            method: "GET",
            withCredentials: true,
            url: "api/posts",
        }).then((res) => {
            console.log(res);
            console.log("then is working")
            return res
        });
        //added by matt milici
    }
}

export default API;