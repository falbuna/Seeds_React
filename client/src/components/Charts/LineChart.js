import React, { Component, useState } from "react";
import { Line } from "react-chartjs-2";



function LineChart(props) {


    return (
        <div>
            <Line
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            label: 'Personal Growth',
                            fill: false,
                            lineTension: .2,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: '#A1C16D',
                            borderWidth: 3,
                            data: props.data,

                        }
                    ]
                }}
                options={{
                    title: {
                        display: true,
                        fontColor: "white",
                        text: "You're like a stock. There's always highs and lows.",
                        fontSize: 20
                    },
                    legend: {
                        display: false,
                        position: 'bottom'
                    }
                }}
            />
        </div>
    );
}

export default LineChart;