import React, { useEffect, useState } from "react";

import Chart from "../Charts/Chart"

function Metrics() {


    return (
        <div>
            <div className="md:flex md:justify-around">
                <div className="w-full md:w-1/2 m-2 mb-6">
                    <Chart title="good day results" data={[65, 59, 80, 81, 56]} labels={['Work', 'Family', 'Friends',
                        'Mental', 'Other']} /></div>
                <div className="w-full md:w-1/2 m-2 mb-6">
                    <Chart title="bad day results" data={[65, 59, 80, 81, 56]} labels={['Work', 'Family', 'Friends',
                        'Mental', 'Other']} /></div>
            </div>
        </div>


    );
}
export default Metrics;