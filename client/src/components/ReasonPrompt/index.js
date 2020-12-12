import React from "react";

function ReasonPrompt ({
    dayQuality,
    reasons,
    logReason,
    showAddNewReason
}) {

    function handleReasonSubmit (event) {
        console.log(event.target.value)
        logReason(event.target.value)
    }

    function handleNewReason (event) {
        showAddNewReason()
    }

    return (
        <div className="m-auto text-center">
            {
                dayQuality === "Good"
                    ? <p className="font-sans font-bold text-5xl text-lime1">Nice! Why did you have a good day?</p>
                    : <p className="font-sans font-bold text-5xl text-lime1">Dang... Why did you have a bad day?</p>
            }

            {
                reasons.map( reason => (
                    <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" 
                    value={reason}
                    onClick={handleReasonSubmit}>{reason}</button>
                ))    
            }

            <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" 
            onClick={handleNewReason}>New Reason</button>

        </div>
    )

}

export default ReasonPrompt;