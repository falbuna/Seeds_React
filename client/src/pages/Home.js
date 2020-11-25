import React from "react";
// import seeds from "../assets/images/seeds.png"
import Typical from "react-typical"
import { withRouter } from "react-router-dom"

function Home({ history }) {

    function testing() {
        history.push("./Login")
    }
    function testing1() {
        history.push("./Signup")
    }


    return (

        <div className="flex h-screen/1">
            <div id="welcomeScreen" className="m-auto text-center bg-green1">

                <img id="seeds" className="m-auto text-center w-1/2 h-auto" src="/images/seeds.png" alt="Seeds" />

                <h1 className="text-lime1 md:text-4xl font-bold focus:outline-none sm:text-2xl">
                    <Typical
                        steps={[' start small. grow fast. be happy.', 300,]}
                        wrapper="b"
                    />
                </h1>

                <button id="login" onClick={testing} className="block m-auto my-5 w-32 p-2 bg-lime1 text-white text-lg rounded-full font-bold focus:outline-none">
                    Login
        </button>

                <button id="signup" onClick={testing1} className="block m-auto my-5 w-32 p-2 bg-lime1 text-white text-lg rounded-full font-bold focus:outline-none">
                    Sign up
        </button>

            </div>
        </div>


    );
}

export default withRouter(Home);