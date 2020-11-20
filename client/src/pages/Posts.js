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
        gratitudeAnswer: ""
    });

    function RenderNewButtons(event) {
        switch (stage.stage) {
            case 0:
                var response = event.target.innerHTML
                if (response === "Good") {
                    setStage({ ...stage, dayAnswer: event.target.innerHTML, stage: 1, promptHeader: "Nice! Why did you have a good day?" })
                } else {
                    setStage({ ...stage, dayAnswer: event.target.innerHTML, stage: 1, promptHeader: "Dang... Why did you have a bad day?" })
                }
                stage.prompts.map(reason =>
                    (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                    ));
                break;
            case 1:
                setStage({ ...stage, reasonAnswer: event.target.innerHTML, stage: 2, promptHeader: "Regardless of your response, it's important to remember what you're grateful for?" })
                stage.prompts.map(reason =>
                    (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                    ));
                break;
            case 2:
                <form>
                    <h1>Hello</h1>
                    <p>Enter your name:</p>
                    <input type="text" />
                    {
                        stage.prompts.map(reason =>
                            <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                        )}</form>;
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div id="postScreen" className="flex h-screen/1">
                <div className="m-auto text-center">
                    <p className="font-sans font-bold text-5xl text-lime1">{stage.promptHeader}</p>
                    {stage.prompts[stage.stage].map(reason =>
                        (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                        ))}
                </div>
            </div>

        </div >
    );

}


export default Posts;



