import { render } from "@testing-library/react";
import { withRouter } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
// import Button from "../components/Button"
import API from "../utils/API"
// import Auth from "../utils/Auth"
import UserContext from "../utils/UserContext";

function Posts({ history }) {

    const {userState, setUserState} = useContext(UserContext);

    // const [ reasons, setReasons ] = useState([]);
    const [ reasonsRetrieved, setReasonsRetrieved ] = useState(false);

    const [stage, setStage] = useState({
        prompts: [["Good", "Bad"], ["Work", "Family", "Friends", "Mental", "Other"], ["Submit"]],
        promptHeader: "How was your day?",
        stage: 0,
        complete: null,
        user_id: "",
        dayAnswer: "",
        reasonAnswer: "",
        gratitudeAnswer: "",
        newReason: "",
        showGratitude: false,
        showNewReason: false
    });

    useEffect(function () {
        let mounted = true
        if (mounted) {
            getReasons()
        }
        return () => mounted = false;
    }, []);

    function getReasons() {
        API.getReason({
            user_id: userState.user_id
        }).then(function (result) {

            var reasonArray = stage.prompts[1];

            result.data.map(reason => {
                reasonArray.push(reason.reason);
            })

            setStage({... stage,
                prompts: [
                    ["Good", "Bad"], 
                    reasonArray, 
                    ["Submit"]
                ]
        });
            setReasonsRetrieved(true);
        })
    }

    function addPosts(){
        API.addPost({
            day_quality: stage.dayAnswer,
            gratitude: stage.gratitudeAnswer,
            user_id: userState.user_id,
            reason: stage.reasonAnswer
        }).then(function (result) {
            console.log(result);
        })
    }

    function RenderNewButtons(event) {
        switch (stage.stage) {
            case 0:
                if (event.target.innerHTML === "Good") {
                    setStage({ ...stage, dayAnswer: event.target.innerHTML, stage: 1, promptHeader: "Nice! Why did you have a good day?" })
                } else {
                    setStage({ ...stage, dayAnswer: event.target.innerHTML, stage: 1, promptHeader: "Dang... Why did you have a bad day?" })
                }
                // stage.prompts.map(reason =>
                //     (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                //     ));
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
        addPosts();
        // history.push("/members");
    }

    return (
        reasonsRetrieved
        ? (<div>
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
                                <a href="/members">
                                <button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={submitAll}>Submit</button>
                                </a>
                            </div>)
                        : stage.prompts[stage.stage].map(reason =>
                            (<button className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none" onClick={RenderNewButtons}>{reason}</button>
                            ))
                    }
                </div>
            </div>
        </div >)
        : <div>Waiting</div>
    );
}
export default withRouter(Posts);