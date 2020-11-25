import React from "react";

export default function (result) {
    if (result.data === undefined) {
        console.log("working")
        return false
    } else {
        return true
    }
}