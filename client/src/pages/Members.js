import React, { useState } from "react";

function Members() {
  return (
    <div className="App">
      <div className="bg-lime1">
        <div className="p-auto max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center font-bold">
            <h2 className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10">
              Welcome <span className="member-name"></span>
            </h2>
            <p className="text-lg text-white text-opacity-75 leading-6 font-medium">
              Hopefully you're having a <span className="text-white">great</span> day!
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white text-opacity-75">
                Total Posts
                </dt>
              <dd id="totalSubmissions" className="order-1 text-5xl leading-none font-extrabold text-white">
                0
                </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white text-opacity-75">
                Good Day %
                </dt>
              <dd className="order-1 text-5xl leading-none font-extrabold text-white">
                <span id="totalGoodDayCalc">0</span>
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white text-opacity-75">
                Current Streak
                </dt>
              <dd id="totalGoodDayStreak" className="order-1 text-5xl leading-none font-extrabold text-white">
                0
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="md:flex md:justify-around mt-16">
        <div id="goodReasonsDiv" className="w-full md:w-1/3 m-2 hidden mb-6">
          <p className="mt-14text-3xl leading-9 text-white sm:text-4xl sm:leading-10 max-w-4xl mx-auto text-center font-bold">Good Days</p>
          <canvas id="goodReasons"></canvas>
        </div>
        <div id="badReasonsDiv" className="w-full md:w-1/3 m-2 hidden">
          <p className="mt-14text-3xl leading-9 text-white sm:text-4xl sm:leading-10 max-w-4xl mx-auto text-center font-bold">Bad Days</p>
          <canvas id="badReasons"></canvas>
        </div>
        <div className="w-1/3 m-2" hidden><canvas id="dayQualityChart"></canvas></div>
      </div>
      <div className="mt-14text-3xl leading-9 text-white sm:text-4xl sm:leading-10 max-w-4xl mx-auto text-center font-bold">
        Total Reasons Log</div>
      <div className="block w-1/2 m-auto flex mt-4 mb-16">
        <canvas id="reasonsBarChart"></canvas>
      </div>
    </div>
  );
}
export default Members;