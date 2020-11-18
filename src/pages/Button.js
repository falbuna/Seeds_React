import React, { useState } from "react";

function Button(props) {
    return (
        <button value={props.value} className="block m-auto my-5 w-32 p-2 bg-lime1 text-white rounded-full font-bold focus:outline-none">
            {props.reason}
        </button>
    );

}

export default Button;