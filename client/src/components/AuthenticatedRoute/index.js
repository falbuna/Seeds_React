import { Route, Redirect } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import UserContext from "../../utils/UserContext";
import isAuthenticated from "../../utils/isAuthenticated";
import Auth from "../../utils/Auth";
import API from "../../utils/API";


function AuthenticatedRoute({ Component, ...rest }) {

    const { userState, setUserState } = useContext(UserContext);

    const [isAwaitingAuthentication, setIsAwaitingAuthentication] = useState(true);
    const [postDataRetrieved, setPostDataRetrieved] = useState(false);
    const [postDataSorted, setPostDataSorted] = useState(false);

    useEffect(function () {
        let mounted = true;
        Auth.getUser()
            .then(function (result) {
                if (mounted) {
                    setUserState({
                        ...userState,
                        loggedIn: isAuthenticated(result),
                        userName: result.data.name,
                        userEmail: result.data.email,
                        user_id: result.data.id
                    });
                    setIsAwaitingAuthentication(false);

                }
            })
            .catch(function (err) {
                console.log(err)
                setUserState({ ...userState, loggedIn: false });
                setIsAwaitingAuthentication(false);
            })
        return () => mounted = false;
    }, []);

    useEffect(function () {
        if (!isAwaitingAuthentication) {
            getPosts()
        }
    }, [isAwaitingAuthentication])

    useEffect(function () {
        if(postDataRetrieved) {
            filterDayQuality(userState.all_posts);
        }
    }, [postDataRetrieved])

    useEffect(function () {
        if(postDataSorted) {
            console.log("===================================")
            console.log(userState);
            console.log("===================================")
        }
    }, [postDataSorted])

    function getPosts() {
        API.getPost({
            user_id: userState.user_id
        }).then(function (PostData) {
            setUserState({ 
                ...userState, 
                all_posts: PostData.data,
                postsRetrieved: true
            })
            setPostDataRetrieved(true)
        })
    }

    function filterDayQuality(Post) {

        var good_array = []
        var bad_array = []

        for (let i = 0; i < Post.length; i++) {
            if (Post[i].day_quality === "Good") {
                good_array.push(Post[i]);
            } else {
                bad_array.push(Post[i])
            }
        }

        var currentPosition = 0
        var postArrayReverse = Post.reverse()
        var currentStreak = 0
        while (postArrayReverse[currentPosition] && postArrayReverse[currentPosition].day_quality === "Good") {
            currentStreak = currentStreak + 1
            currentPosition++;
        }

        var numberOfPosts = Post.length
        var goodDayPercent = Math.round((good_array.length / Post.length) * 100)

        setUserState({
            ...userState,
            bad_post_array: bad_array,
            good_post_array: good_array,
            good_day_percentage: goodDayPercent,
            totalPosts: numberOfPosts,
            currentGoodDayStreak: currentStreak,
            postsSorted: true
        })
        setPostDataSorted(true);
    }

    return (
        <Route {...rest} render={
            props => {
                return isAwaitingAuthentication
                    ? <h1>Authenticating...</h1>
                    : userState.loggedIn
                        ? postDataRetrieved
                            ? postDataSorted
                                ? <Component {...props} />
                                : <h1>sorting post data</h1>
                            : <h1>Waiting for post data</h1>
                        : <Redirect to="/login" />
            }
        } />


    )
}

export default AuthenticatedRoute;