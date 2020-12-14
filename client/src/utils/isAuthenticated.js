import React from "react";

export default function (result) {
    if (result.data == "No User Exists." 
    || result.data == "Incorrect Email." 
    || result.data == "Incorrect Password."
    || result.data == ""  ) {
        return false
    } else {
        return true
    }
}