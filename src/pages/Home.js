import React from "react";
import seeds from "../public/assets/images/seeds.png"
import Typical from "react-typical"

function Home(){
    return(
    
        <div class="flex h-screen/1">
        <div id="welcomeScreen" class="m-auto text-center">

        <img id="seeds" class="m-auto text-center w-1/2 h-auto" src={ seeds } />
        <h1 id="seedsBottomText" class="animation text-green1 md:text-4xl font-bold focus:outline-none sm:text-2xl">start small. grow fast. be happy</h1>
            
        <h1>
            <Typical
            steps={['start small. grow fast. be happy', 2000,]}
            wrapper="b"
            />
        </h1>

        <button id="login" class="block m-auto my-5 w-32 p-2 bg-lime1 text-white text-lg rounded-full font-bold focus:outline-none">
            Login
        </button>

        <button id = "signup" class="block m-auto my-5 w-32 p-2 bg-lime1 text-white text-lg rounded-full font-bold focus:outline-none">
            Sign up
        </button>

        <script src="/public/assets/js/dist/index.js"></script>

    </div>
    </div>
    
    );
}

export default Home;