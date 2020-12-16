import React, { useState } from "react";
import API from "../../utils/API";

function NewReasonPrompt({
    logNewReason,
    dayQuality
}) {
    const [newReason, setNewReason] = useState("");

    function addNewReason() {
        logNewReason(newReason)
    }

    return (
        <div className="m-auto text-center">
            {
                dayQuality === "Good"
                    ? <p className="font-sans font-bold text-5xl text-lime1">Nice! Why did you have a good day?</p>
                    : <p className="font-sans font-bold text-5xl text-lime1">Dang... Why did you have a bad day?</p>
            }
            <form onSubmit={addNewReason}>
                < textarea
                    onChange={e => setNewReason(e.target.value)}
                    type="text"
                    rows={4}
                    cols={40}
                />

                <button type="submit"
                    className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none">
                    Submit
            </button>
            </form>

        </div>
    )
}

export default NewReasonPrompt;