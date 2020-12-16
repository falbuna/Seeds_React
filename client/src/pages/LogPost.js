import { withRouter } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import moment from 'moment';

// import Auth from "../utils/Auth"

import DayQualityPrompt from "../components/DayQualityPrompt";
import ReasonsPrompt from "../components/ReasonPrompt";
import NewReasonPrompt from "../components/NewReasonPrompt";
import GratitudePrompt from "../components/GratitudePrompt";
import PostAlreadyMade from "../components/PostAlreadyMade";

function Posts({ history }) {

    const { userState, setUserState } = useContext(UserContext);
    const [reasons, setReasons] = useState([]);
    const [retrievedReasons, setRetrievedReasons] = useState(false);
    const [postSent, setPostSent] = useState(false);
    const [postRecordedToday, setPostRecordedToday] = useState(false);

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
        const allPostsToday = [];
        const postsMadeToday = userState.all_posts.map(post => {
            const dateOfPost = moment(post.createdAt).local().format("MM/DD/YYYY");
            const todayDate = moment().local().format("MM/DD/YYYY");
            if (dateOfPost == todayDate) {
                allPostsToday.push(post)
            }
        })

        if (allPostsToday.length !== 0) {
            setPostRecordedToday(true);
            console.log("nice")
        }
    }, [userState])

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
                        setUserState({ ...userState, postsRetrieved: false, postsSorted: false })
                        history.push("/members");
                    })
                } else {
                    setPostSent(true);
                    setUserState({ ...userState, postsRetrieved: false, postsSorted: false })
                    history.push("/members");
                }
            })
            // history.push("/members")
        }
    }

    return (
        <div className="flex-grow flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {
                    retrievedReasons
                        ? <div>
                            {
                                postRecordedToday
                                    ? <PostAlreadyMade />
                                    : (!postProgress.dayQualityRecieved)
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
        </div>
    )
}
export default withRouter(Posts);