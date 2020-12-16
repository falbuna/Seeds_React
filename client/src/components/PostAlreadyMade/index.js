import React from "react";
import { Link } from "react-router-dom";



function PostAlreadyMade() {

    return (
        <div>
            <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-lime1 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Seeds</span>
                            {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
                        </h1>
                        <h2 className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10">
                            You've already created an entry today!
                        </h2>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            If you would like to edit your existing entry, click on it on the calendar in the members page.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div>
                                <Link to="members">
                                    <div id="newPostButton" className="flex-shrink-0">
                                        <span className="rounded-md shadow-sm">
                                            <button id="newpost" type="button"
                                                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-lime1 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out">

                                                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fillRule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clipRule="evenodd" />
                                                </svg>
                                                Back to Members
                                            </button>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostAlreadyMade;