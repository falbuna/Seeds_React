import React from "react";

export default function (result) {
    if (result.data === "No User Exists." 
    || result.data === "Incorrrect Email." 
    || result.data === "Incorrrect Password."  ) {
        console.log("nope")
        return false
    } else {
        return true
    }
}