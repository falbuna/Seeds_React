import { createContext } from "react";

export const UserContext = createContext({
    prompts: [
        ["Good", "Bad"],
        ["Work", "Family", "Freinds", "Mental", "Other"],
        ["Submit"]
    ],
    promptHeader: "How was your day?",
    stage: 0,
    complete: null,
    dayAnswer: "",
    reasonAnswer: "",
    gratitudeAnswer: ""
})