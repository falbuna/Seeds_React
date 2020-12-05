import React from "react";

const UserContext = React.createContext({
    userState: {
        loggedIn: false,
        userName: "",
        userEmail: "",
        user_id: "",
        all_posts: [],
        good_day_percentage: 0,
        totalPosts: 0,
        good_post_array: [],
        bad_post_array: [],
        currentGoodDayStreak: 0
    },
    setUserState: () => {}
});

export default UserContext;