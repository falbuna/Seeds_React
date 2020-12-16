import React, { useEffect, useState, useContext } from "react";
import LineChart from "../Charts/LineChart";
import Title from "../Title";
import API from "../../utils/API"
import UserContext from "../../utils/UserContext";

import Chart from "../Charts/Chart"

function Metrics(props) {

    const [reasons, setReasons] = useState([]);
    const {userState, setUserState} = useContext(UserContext);

    useEffect(function () {
        let mounted = true
        if (mounted) {
            console.log(userState)
            if (userState.loggedIn
                && userState.postsRetrieved
                && userState.postsSorted) {
                getReasons()
            }
        }
        return () => mounted = false;
    }, [userState]);

    const getReasons = function () {
        API.getReason({
            user_id: userState.user_id
        }).then(function (result) {

            var reasonArray = ["Work", "Family", "Friends", "Mental"];

            result.data.map(reason => {
                reasonArray.push(reason.reason);
            })

            setReasons(reasonArray)
            // setReasons(reasonArray)
        })
    }

    function filterArraysByReason (array) {
        console.log(reasons)
        const arrayData = []
        reasons.forEach( reason => {

            const reasonArray = array.filter(post => {
                return post.reason === reason
            })
            arrayData.push(reasonArray.length)
        })
        return arrayData
    }

    console.log(filterArraysByReason(props.badPosts))

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
                
                <div className="w-full md:w-1/2 m-2 mb-6 text-center">
                    {
                        props.goodPosts.length == 0
                            ?
                            <div className="bg-gray-50">
                            <div className="max-w-7xl lg:ml-20 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    <span className="block text-white">You do not have any Good Posts yet</span>
                                </h2>
                            </div>
                            </div>
                            : <Chart title="good day results" data={filterArraysByReason(props.goodPosts)} labels={reasons} />
                    }
                </div>

                <div className="w-full md:w-1/2 m-2 mb-6 text-center">
                    {
                        props.badPosts.length == 0
                            ? 
                            <div className="bg-gray-50">
                                <div className="max-w-7xl lg:ml-20 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        <span className="block text-white">You do not have any Bad Posts yet</span>
                                    </h2>
                                </div>
                            </div>
                            : <Chart title="bad day results" data={filterArraysByReason(props.badPosts)} labels={reasons} />
                    }
                </div>
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