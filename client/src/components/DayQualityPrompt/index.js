import React, { useState, useEffect } from "react";

function DayQualityPrompt({
    logDayQuality
}) {

    function handleSubmission(event) {
        console.log(event.target.value)

        logDayQuality(event.target.value)
    }



    return (
        <div className="m-auto text-center">
            <p className="font-sans font-bold text-5xl text-lime1">How was your day?</p>
            
            <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none"
                value="Good"
                onClick={handleSubmission}>
                Good
            </button>
            
            <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none"
                value="Bad"
                onClick={handleSubmission}>
                Bad
            </button>

        </div>
    )
}

export default DayQualityPrompt;