import React from "react";

function Posts(){
    return(

        <div id="postScreen" className="flex h-screen/1">

    <div id="dayQuality" className="m-auto text-center">

        <p className="font-sans font-bold text-5xl text-lime1">How was your day?</p>

        <button id="good"
            className="day_quality block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none">
            Good
        </button>

        <button id="bad" className="day_quality block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none">
            Bad
        </button>

    </div>

    <div id="reasons" className="m-auto text-center">

        <div id="Day" className="m-auto text-center">


            <p id="genericResponse" className="font-sans font-bold text-5xl text-lime1"></p>

            <button id="Work"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                Work
            </button>

            <button id="Family"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                Family
            </button>

            <button id="Friends"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                Friends
            </button>

            <button id="School"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                School
            </button>

            <button id="Relationship"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                Relationship
            </button>

            <button id="Health"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                Health
            </button>

            <button id="Other"
                className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none reasonSelected">
                Other
            </button>
        </div>
    </div>

    <div id="gratitude" className="m-auto text-center">
        <label className="block">
            <span className="font-sans font-bold text-2xl text-lime1">What is something you are grateful for today?</span>
            <textarea id="gratitudeResponse" maxLength="255" className="form-textarea mt-1 block w-full" rows="3"
                placeholder="Enter some long form content."></textarea>
        </label>
        <br />
        <p className="text-white">You have <span className="text-white" id="charactersRemaining">255</span> characters
            remaining.</p>
        <button id="gratitudeSubmit"
            className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none"
            type="submit">Submit</button>
    </div>


</div>
    
        );
}

export default Posts;