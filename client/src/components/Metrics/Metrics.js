import React, { useEffect, useState } from "react";
import Members from "../../pages/Members"

import Chart from "../Charts/Chart"

function Metrics(props) {

    function filterArrays(SpecificArray) {
        var work = 0
        var family = 0
        var friends = 0
        var mental = 0
        var other = 0
        for (let i = 0; i < SpecificArray.length; i++) {
            switch (SpecificArray[i].reason) {
                case "Work":
                    work++
                    break;
                case "Family":
                    family++
                    break;
                case "Friends":
                    friends++
                    break;
                case "Mental":
                    mental++
                    break;
                case "Other":
                    other++
                    break;
                default:
                    break;
            }
        }
        return [work, family, friends, mental, other]
    }

    return (
        <div>
            <div className="md:flex md:justify-around">
                <div className="w-full md:w-1/2 m-2 mb-6">
                    <Chart title="good day results" data={filterArrays(props.goodPosts)} labels={['Work', 'Family', 'Friends',
                        'Mental', 'Other']} /></div>
                <div className="w-full md:w-1/2 m-2 mb-6">
                    <Chart title="bad day results" data={filterArrays(props.badPosts)} labels={['Work', 'Family', 'Friends',
                        'Mental', 'Other']} /></div>
            </div>
        </div>


    );
}
export default Metrics;