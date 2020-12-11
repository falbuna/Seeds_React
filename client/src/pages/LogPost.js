import { Redirect } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

// import Auth from "../utils/Auth"

import DayQualityPrompt from "../components/DayQualityPrompt";
import ReasonsPrompt from "../components/ReasonPrompt";
import NewReasonPrompt from "../components/NewReasonPrompt";
import GratitudePrompt from "../components/GratitudePrompt";

function Posts() {

    const { userState, setUserState } = useContext(UserContext);
    const [reasons, setReasons] = useState([]);
    const [retrievedReasons, setRetrievedReasons] = useState(false);
    const [postSent, setPostSent] = useState(false)

    const [postProgress, setPostProgress] = useState({
        dayQualityRecieved: false,
        reasonRecieved: false,
        addNewReason: false,
        newReasonRecieved: false,
        gratitudeRecieved: false
    });
    const [post, setPost] = useState({
        dayQuality: "",
        reason: "",
        gratitude: ""
    })

    useEffect(function () {
        let mounted = true
        if (mounted) {
            console.log(userState)
            if (userState.loggedIn
                && userState.postsRetrieved
                && userState.postsSorted) {
                getReasons()
            }
        }
        return () => mounted = false;
    }, [userState]);

    useEffect(function () {
        if (postProgress.dayQualityRecieved) {
            console.log(post)
        }
    }, [postProgress])

    // useEffect(function () {
    //     if (postSent) {
    //         history.push("/members")
    //     }
    // }, [postSent])

    useEffect(function () {
        let mounted = true
        if (mounted) {
            submitNewPost()
        }
        return () => mounted = false;
    }, [postProgress])

    const getReasons = function () {
        API.getReason({
            user_id: userState.user_id
        }).then(function (result) {

            var reasonArray = ["Work", "Family", "Friends", "Mental"];

            result.data.map(reason => {
                reasonArray.push(reason.reason);
            })

            setReasons(reasonArray)
            setRetrievedReasons(true)
            // setReasons(reasonArray)
        })
    }

    const logDayQuality = function (dayQuality) {
        setPost({
            ...post,
            dayQuality: dayQuality
        })
        setPostProgress({
            ...postProgress,
            dayQualityRecieved: true
        })
    }

    const logReason = function (reason) {
        setPost({
            ...post,
            reason: reason
        })
        setPostProgress({
            ...postProgress,
            reasonRecieved: true
        })
    }

    const showAddNewReason = function () {
        setPostProgress({
            ...postProgress,
            addNewReason: true,
            reasonRecieved: true
        })
    }

    const logNewReason = function (reason) {
        setPost({
            ...post,
            reason: reason
        })
        setPostProgress({
            ...postProgress,
            reasonRecieved: true,
            newReasonRecieved: true
        })
    }

    const logGratitude = function (gratitude) {
        setPost({
            ...post,
            gratitude: gratitude
        })
        setPostProgress({
            ...postProgress,
            gratitudeRecieved: true
        })
    }

    const submitNewPost = function () {
        if (postProgress.dayQualityRecieved
            && postProgress.reasonRecieved
            && postProgress.gratitudeRecieved) {
            API.addPost({
                day_quality: post.dayQuality,
                gratitude: post.gratitude,
                user_id: userState.user_id,
                reason: post.reason
            }).then(function () {
                if (postProgress.addNewReason && postProgress.newReasonRecieved) {
                    API.addReason({
                        reason: post.reason,
                        user_id: userState.user_id
                    }).then(function () {
                        setPostSent(true);
                    })
                } else {
                    setPostSent(true);
                }
            })
            // history.push("/members")
        }
    }

    return (
        <div>
            {
                retrievedReasons
                    ? <div>
                        {
                            (!postProgress.dayQualityRecieved)
                                // ? <div>day quality prompt</div>
                                ? <DayQualityPrompt
                                    logDayQuality={logDayQuality}
                                />
                                : (!postProgress.reasonRecieved)
                                    ? <ReasonsPrompt
                                        dayQuality={post.dayQuality}
                                        reasons={reasons}
                                        logReason={logReason}
                                        showAddNewReason={showAddNewReason}
                                    />
                                    : (postProgress.addNewReason)
                                        ? (!postProgress.newReasonRecieved)
                                            ? <NewReasonPrompt
                                                user_id={userState.user_id}
                                                logNewReason={logNewReason}
                                            />
                                            : <GratitudePrompt
                                                dayQuality={post.dayQuality}
                                                logGratitude={logGratitude}
                                            />
                                        : <GratitudePrompt
                                            dayQuality={post.dayQuality}
                                            logGratitude={logGratitude}
                                        />
                        }
                    </div>
                    : <div>wait</div>
            }
        </div>
    )
}
export default Posts;