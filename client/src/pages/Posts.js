import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
// import Button from "../components/Button"

function Posts() {
    const [stage, setStage] = useState({
        prompts: [["Good", "Bad"], ["Work", "Family", "Freinds", "Mental", "Other"], ["Submit"]],
        promptHeader: "How was your day?",
        stage: 0,
        complete: null,
        dayAnswer: "",
        reasonAnswer: "",
        gratitudeAnswer: "",
        showGratitude: false
    });
    function RenderNewButtons(event) {
        switch (stage.stage) {
            case 0:
                if (event.target.innerHTML === "Good") {
                    setStage({ ...stage, dayAnswer: event.target.innerHTML, stage: 1, promptHeader: "Nice! Why did you have a good day?" })
                } else {
                    setStage({ ...stage, dayAnswer: event.target.innerHTML, stage: 1, promptHeader: "Dang... Why did you have a bad day?" })
                }
                stage.prompts.map(reason =>
                    (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                    ));
                break;
            case 1:
                setStage({ ...stage, reasonAnswer: event.target.innerHTML, stage: 2, promptHeader: "What are you grateful for?", showGratitude: true })
                break;
            default:
                break;
        }
    }
    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setStage({
            ...stage,
            [name]: value
        });
    };
    function submitAll() {
        console.log(stage)
    }
    return (
        <div>
            <div id="postScreen" className="flex h-screen/1">
                <div className="m-auto text-center">
                    <p className="font-sans font-bold text-5xl text-lime1">{stage.promptHeader}</p>
                    {stage.showGratitude ?
                        (
                            <div>
                                < textarea
                                    value={stage.gratitudeAnswer}
                                    onChange={handleInputChange}
                                    type="text"
                                    id="gratitudeAnswer"
                                    name="gratitudeAnswer"
                                    rows={4}
                                />
                                <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={submitAll}>Submit</button>
                            </div>)
                        : stage.prompts[stage.stage].map(reason =>
                            (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                            ))
                    }
                </div>
            </div>
        </div >
    );
}
export default Posts;