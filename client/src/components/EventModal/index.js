import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";

function EventModal({ modalInfo, setshowEvent, showEvent, setModal }) {

    const { userState, setUserState } = useContext(UserContext);

    const [edit, setEdit] = useState(false);
    const [showReasons, setShowReasons] = useState(false);

    const [reasons, setReasons] = useState([]);
    const [retrievedReasons, setRetrievedReasons] = useState(false);

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
        console.log(userState)
    }, [userState])

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
        })
    }

    const handleGratitudeChange = (event) => {
        setModal({ ...modalInfo, gratitude: event.target.value })
    }

    const handleChangeDayQuality = (event) => {
        setModal({ ...modalInfo, day_quality: event.target.value })
    }

    const handleChangeReason = (event) => {
        setModal({ ...modalInfo, reason: event.target.value })
        setShowReasons(false)
    }

    const handleShowReasons = () => {
        setShowReasons(!showReasons);
    }

    const handleSubmitChanges = () => {
        API.updatePost({
            id: modalInfo.id,
            day_quality: modalInfo.day_quality,
            reason: modalInfo.reason,
            gratitude: modalInfo.gratitude
        }).then(function () {
            setshowEvent(false);
            setUserState({
                ...userState,
                postsRetrieved: false,
                postsSorted: false
            })
            window.location.reload()
        })
    }



    return (
        <div>
            {
                retrievedReasons
                    ? <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>


                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                            <div className="inline-block align-bottom bg-white text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">


                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">

                                        {
                                            edit
                                                ? <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        Day Quality:
                                        </h3>

                                                    <div className="mt-2 -ml-3">
                                                        <p className="text-sm text-gray-500">
                                                            <button type="button" 
                                                            className={modalInfo.day_quality === "Good"
                                                                ?
                                                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" 
                                                                :
                                                                "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}
                                                                value="Good"
                                                                onClick={handleChangeDayQuality}
                                                            >
                                                                Good
                                                            </button>

                                                            <button type="button" className={modalInfo.day_quality === "Bad"
                                                            ?
                                                            "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                            :
                                                            "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                            }
                                                                value="Bad"
                                                                onClick={handleChangeDayQuality}
                                                            >
                                                                Bad
                                                            </button>

                                                        </p>
                                                    </div>

                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        Reason for your {modalInfo.day_quality} day:
                                        </h3>

                                                    <div className="mt-2">
                                                        <div className="relative inline-block text-left">
                                                            <div>
                                                                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true"
                                                                    onClick={handleShowReasons}>
                                                                    <svg className="mr-1 -ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                    </svg>
                                                                    {modalInfo.reason}
                                                                </button>
                                                            </div>
                                                            {
                                                                showReasons
                                                                    ? <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                                                                            {
                                                                                reasons.map(reason => {
                                                                                    return (
                                                                                        <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem"
                                                                                            value={reason}
                                                                                            onClick={handleChangeReason}>
                                                                                            {reason}
                                                                                        </button>
                                                                                    )

                                                                                })
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                    : <div></div>
                                                            }

                                                        </div>
                                                    </div>

                                                    <h3 className="mt-1 text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        You were grateful for:
                                        </h3>

                                                    <div className="mt-2">
                                                        <p className="text-sm">
                                                            <textarea className="border-2 border-gray-500 border-rounded" cols="40" type="text" value={modalInfo.gratitude} onChange={handleGratitudeChange} />
                                                        </p>
                                                    </div>
                                                </div>

                                                : <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        Reason for your {modalInfo.day_quality} day:
                                        </h3>

                                                    <div>
                                                        <p className="text-sm text-gray-500">
                                                            {modalInfo.reason}
                                                        </p>
                                                    </div>

                                                    <h3 className="mt-1 text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        Gratitude for the day:
                                        </h3>
                                                    <div>
                                                        <p className="text-sm text-gray-500">
                                                            {modalInfo.gratitude}
                                                        </p>
                                                    </div>
                                                </div>

                                        }



                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    {
                                        edit
                                            ? <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={handleSubmitChanges}
                                            >
                                                Submit
                      </button>
                                            : <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setEdit(true)}
                                            >
                                                Edit
                          </button>

                                    }

                                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setshowEvent(!showEvent)} >
                                        Cancel
                      </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    : <div></div>
            }
        </div>

    )
}

export default EventModal;
