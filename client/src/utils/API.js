import Axios from "axios";

const API = {
    addPost: ({day_quality, gratitude, user_id, reason}) => {
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
    }).then((res) => {});
},
}

export default API;