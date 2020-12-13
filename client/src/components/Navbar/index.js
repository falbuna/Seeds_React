import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/Auth";
import UserContext from "../../utils/UserContext";

// import seedsLogo from "../../assets/images/seedsLogo.png"

function Navbar() {

    const { userState, setUserState } = useContext(UserContext);

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    function handleLogout() {
        Auth.logout()
        setUserState({
            loggedIn: false,
            userName: "",
            userEmail: "",
            user_id: "",
            good_day_percentage: 0,
            totalPosts: 0,
            all_posts: [],
            good_post_array: [],
            bad_post_array: [],
            currentGoodDayStreak: 0
        })
    }

    return (

        <div className="bg-green1">
            <nav className="green1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="-ml-2 mr-2 flex items-center md:hidden">

                                <button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out mobileNavButton"
                                    aria-label="Main menu" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>

                                    <svg className="block h-6 w-6 mobileNavIconClosed" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>

                                    <svg className="hidden h-6 w-6 mobileNavIconOpen" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="/images/seedsLogo.png" />
                                <img className="hidden lg:block h-8 w-auto" src="/images/seedsLogo.png" />
                            </div>
                            <div className="hidden md:ml-6 md:flex md:items-center">
                                <Link to="/"
                                    className="homeButton px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home Page</Link>
                                <Link to="about"
                                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</Link>

                                {/* <Link to="login"
                                    className="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</Link>

                                <Link to="home"
                                    className="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                    onClick={handleLogout}>Logout</Link> */}
                                {
                                    userState.loggedIn
                                        ? <div>
                                            <a href="members"
                                                className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Members</a>
                                            <a href="history"
                                                className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">History</a>
                                            <a href="home"
                                                className="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                                onClick={handleLogout}>Logout</a>
                                        </div>
                                        : <a href="login"
                                            className="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</a>
                                }
                            </div>
                        </div>
                        <div className="flex items-center">
                            {
                                userState.loggedIn
                                    ? <Link to="posts">
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
                                    : <div></div>
                                }
                            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            <button
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-300 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                                aria-label="Notifications">

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>


                            <div className="ml-3 relative">
                                <div>
                                    <button
                                        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <div className="h-8 w-8 rounded-full"><i className="fas fa-user-circle"></i></div>

                                        {/* <img className="h-8 w-8 rounded-full" alt=""></img> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>




            <div className={(navbarOpen ? "md:hidden" : "hidden")}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <Link to="/"
                        className="homeButton block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home
        Page</Link>
                    <Link to="about"
                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</Link>

                    {
                        userState.loggedIn
                            ? <div>
                                <a href="Members"
                                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Members</a>
                                <a href="History"
                                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">History</a>
                                <a href="home"
                                    className="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                    onClick={handleLogout}>Logout</a>
                            </div>
                            : <a href="login"
                                className="logButton ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Login</a>
                    }

                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5 sm:px-6">
                        <div className="flex-shrink-0">
                            {/* <img className="h-10 w-10 rounded-full" alt=""></img> */}
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-6 text-white mobileNavName"></div>
                            <div className="text-sm font-medium leading-5 text-gray-400 mobileNavEmail"></div>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div >

    );
}

export default Navbar;