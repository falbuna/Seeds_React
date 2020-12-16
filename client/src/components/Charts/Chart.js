import React, { Component, useState } from "react";
import { Pie } from "react-chartjs-2";


function Chart(props) {

    const [stage, setStage] = useState({
        labels: props.labels,
        datasets: [
            {
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4',
                    // '#F387B2',
                    // '#49976B',
                    // '#FFFFFF',
                    // '#E98601',
                    // '#A90052'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    // '#965870',
                    // '#316246',
                    // '#ACACAC',
                    // '#A96100',
                    // '#59002B'
                ],
                data: props.data
            }
        ]
    });


    return (
        <div className="chart">
            <Pie
                data={stage}
                options={{
                    title: {
                        display: true,
                        text: props.title,
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
            />
        </div>


    )



}

export default Chart;