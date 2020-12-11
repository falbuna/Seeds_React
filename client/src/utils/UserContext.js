import React from "react";

const UserContext = React.createContext({
    userState: {
        userName: "",
        userEmail: "",
        user_id: "",
        loggedIn: false,
        all_posts: [],
        postsRetrieved: false,
        good_day_percentage: 0,
        totalPosts: 0,
        good_post_array: [],
        bad_post_array: [],
        currentGoodDayStreak: 0,
        postsSorted: false
    },
    setUserState: () => {}
});

export default UserContext;