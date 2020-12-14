import React, { useEffect, useState } from "react";
import LineChart from "../Charts/LineChart";
import Members from "../../pages/Members";
import Title from "../Title";

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

    function buildLineChart(SpecificArray) {
        var lineChartValue = 0
        var LineChartArray = [0]
        for (let i = 0; i < SpecificArray.length; i++) {
            if (SpecificArray[i].day_quality === "Good") {
                lineChartValue++
                LineChartArray.push(lineChartValue)
            } else {
                lineChartValue--
                LineChartArray.push(lineChartValue)
            }
        }
        console.log(LineChartArray)
        return LineChartArray
    }
    function buildLineChartXaxis(SpecificArray) {
        var xAxisChartValue = 0
        var xAxisChartArray = [0]
        for (let i = 0; i < SpecificArray.length; i++) {
            xAxisChartValue++
            xAxisChartArray.push(xAxisChartValue)
        }
        return xAxisChartArray
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
            <div className="w-4/6 m-auto pt-16">
            <Title>
                Happiness Stock      
            </Title>
                <LineChart
                    className="w-full"
                    data={buildLineChart(props.allPostsArray)}
                    labels={buildLineChartXaxis(props.allPostsArray)}
                />
            </div>
            </div>


    );
}
export default Metrics;