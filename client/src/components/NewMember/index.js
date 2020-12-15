import React from "react";
import { Link } from "react-router-dom";


function NewMember(props) {

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-lime1 sm:text-5xl md:text-6xl">
                            <span class="block xl:inline">Seeds</span>
                            {/* <span class="block text-indigo-600 xl:inline">online business</span> */}
                        </h1>
                        <h2 className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10">
                            Welcome <span className="member-name">{props.name}!</span>
                        </h2>
                        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            This is the first step towards planting the <span className="text-lime1">seeds</span> for a happier life. Getting started is easy! Click on New Posts to start logging your current day. Or click on About to learn more.
                        </p>
                        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div>
                                <Link to="posts">
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
                                                New Post
                                            </button>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <Link to="about">
                                    <div id="newPostButton" className="flex-shrink-0">
                                        <span className="rounded-md shadow-sm">
                                            <button id="newpost" type="button"
                                                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-lime1 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out">
                                                About
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

export default NewMember;