import React from "react";
import seeds from "../assets/images/seeds.png"
import Typical from "react-typical"

function Home(){
    return(
    
        <div className="flex h-screen/1">
        <div id="welcomeScreen" className="m-auto text-center bg-green1">

        <img id="seeds" className="m-auto text-center w-1/2 h-auto" src={ seeds } alt="Seeds"/>
            
        <h1 className = "text-lime1 md:text-4xl font-bold focus:outline-none sm:text-2xl">
            <Typical
            steps={[' start small. grow fast. be happy.', 1500,]}
            wrapper="b"
            />
        </h1>

        <button id="login" className="block m-auto my-5 w-32 p-2 bg-lime1 text-white text-lg rounded-full font-bold focus:outline-none">
            Login
        </button>

        <button id = "signup" className="block m-auto my-5 w-32 p-2 bg-lime1 text-white text-lg rounded-full font-bold focus:outline-none">
            Sign up
        </button>

        </div>
        </div>

    
    );
}

export default Home;