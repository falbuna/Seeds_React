import React, { useState } from "react";

function GratitudePrompt({
    logGratitude
}) {
    const [gratitude, setGratitude] = useState("")

    function handleLogGratitude(event) {
        event.preventDefault()
        logGratitude(gratitude)
    }

    return (
        <div className="m-auto text-center">

    <p className="font-sans font-bold text-5xl text-lime1">What are you grateful for today?</p>

            <form onSubmit={handleLogGratitude}>
                < input
                    onChange={e => setGratitude(e.target.value)}
                    type="text"
                    rows={4}
                />

                <button type="submit"
                    className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none">
                    Submit
            </button>
            </form>
        </div>
    )
}

export default GratitudePrompt;