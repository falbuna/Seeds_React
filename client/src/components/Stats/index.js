import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

function DailyStats(props) {
    useEffect(function () {
        test();
        // return () => (mounted = true);
    }, []);
    const [dailyState, setdailyState] = useState({
        MondayArray: [],
        MondayPoststotal: 0,
        MondayGoodReason: "",
        MondayBadReason: "",
        MondayGoodArray: [],
        MondayBadArray: [],
        TuesdayArray: [],
        TuesdayPoststotal: 0,
        TuesdayGoodReason: "",
        TuesdayBadReason: "",
        TuesdayGoodArray: [],
        TuesdayBadArray: [],
        WednesdayArray: [],
        WednesPoststotal: 0,
        WednesGoodReason: "",
        WednesBadReason: "",
        WednesdayGoodArray: [],
        WednesdayBadArray: [],
        ThursdayArray: [],
        ThursdayPoststotal: 0,
        ThursdayGoodReason: "",
        ThursdayBadReason: "",
        ThursdayGoodArray: [],
        ThursdayBadArray: [],
        FridayArray: [],
        FridayPoststotal: 0,
        FridayGoodReason: "",
        FridayBadReason: "",
        FridayGoodArray: [],
        FridayBadArray: [],
        SaturdayArray: [],
        SaturdayPoststotal: 0,
        SaturdayGoodReason: "",
        SaturdayBadReason: "",
        SaturdayGoodArray: [],
        SaturdayBadArray: [],
        SundayArray: [],
        SundayPoststotal: 0,
        SundayGoodReason: "",
        SundayBadReason: "",
        SundayGoodArray: [],
        SundayBadArray: [],
        MondaydayPercentage: 0,
        TuesdayPercentage: 0,
        WednesdayPercentage: 0,
        ThursdayPercentage: 0,
        FridayPercentage: 0,
        SaturdaydayPercentage: 0,
        SundayPercentage: 0,
    });
    function test() {
        var Mon = [];
        var Tue = [];
        var Wed = [];
        var Thu = [];
        var Fri = [];
        var Sat = [];
        var Sun = [];
        var MonGood = [];
        var TueGood = [];
        var WedGood = [];
        var ThuGood = [];
        var FriGood = [];
        var SatGood = [];
        var SunGood = [];
        var MonBad = [];
        var TueBad = [];
        var WedBad = [];
        var ThuBad = [];
        var FriBad = [];
        var SatBad = [];
        var SunBad = [];

        for (let i = 0; i < props.allPostsArray.length; i++) {
            switch (moment(props.allPostsArray[i].createdAt).local().format("dddd")) {
                case "Monday":
                    Mon.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        MonGood.push(props.allPostsArray[i]);
                    } else {
                        MonBad.push(props.allPostsArray[i]);
                    }
                    break;
                case "Tuesday":
                    Tue.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        TueGood.push(props.allPostsArray[i]);
                    } else {
                        TueBad.push(props.allPostsArray[i]);
                    }
                    break;
                case "Wednesday":
                    Wed.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        WedGood.push(props.allPostsArray[i]);
                    } else {
                        WedBad.push(props.allPostsArray[i]);
                    }
                    break;
                case "Thursday":
                    Thu.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        ThuGood.push(props.allPostsArray[i]);
                    } else {
                        ThuBad.push(props.allPostsArray[i]);
                    }
                    break;
                case "Friday":
                    Fri.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        FriGood.push(props.allPostsArray[i]);
                    } else {
                        FriBad.push(props.allPostsArray[i]);
                    }
                    break;
                case "Saturday":
                    Sat.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        SatGood.push(props.allPostsArray[i]);
                    } else {
                        SatBad.push(props.allPostsArray[i]);
                    }
                    break;
                case "Sunday":
                    Sun.push(props.allPostsArray[i]);
                    if (props.allPostsArray[i].day_quality === "Good") {
                        SunGood.push(props.allPostsArray[i]);
                    } else {
                        SunBad.push(props.allPostsArray[i]);
                    }
                    break;
                default:
                    break;
            }
        }
        var MondayGoodDayPercentage = Math.round(
            (MonGood.length / Mon.length) * 100 + 1
        );
        var TuesdayGoodDayPercentage = Math.round(
            (TueGood.length / Tue.length) * 100
        );
        var WednesdayGoodDayPercentage = Math.round(
            (WedGood.length / Wed.length) * 100
        );
        var ThursdayGoodDayPercentage = Math.round(
            (ThuGood.length / Thu.length) * 100
        );
        var FridayGoodDayPercentage = Math.round(
            (FriGood.length / Fri.length) * 100
        );
        var SaturdayGoodDayPercentage = Math.round(
            (SatGood.length / Sat.length) * 100
        );
        var SundayGoodDayPercentage = Math.round(
            (SunGood.length / Sun.length) * 100
        );
        setdailyState({
            ...dailyState,
            MondayArray: Mon,
            TuesdayArray: Tue,
            WednesdayArray: Wed,
            ThursdayArray: Thu,
            FridayArray: Fri,
            SaturdayArray: Sat,
            SundayArray: Sun,
            MondayGoodArray: MonGood,
            TuesdayGoodArray: TueGood,
            WednesdayGoodArray: WedGood,
            ThursdayGoodArray: ThuGood,
            FridayGoodArray: FriGood,
            SaturdayGoodArray: SatGood,
            SundayGoodArray: SunGood,
            MondayBadArray: MonBad,
            TuesdayBadArray: TueBad,
            WednesdayBadArray: WedBad,
            ThursdayBadArray: ThuBad,
            FridayBadArray: FriBad,
            SaturdayBadArray: SatBad,
            SundayBadArray: SunBad,
            MondayPoststotal: Mon.length,
            TuesdayPoststotal: Tue.length,
            WednesdayPoststotal: Wed.length,
            ThursdayPoststotal: Thu.length,
            FridayPoststotal: Fri.length,
            SaturdayPoststotal: Sat.length,
            SundayPoststotal: Sun.length,
            MondaydayPercentage: MondayGoodDayPercentage,
            TuesdayPercentage: TuesdayGoodDayPercentage,
            WednesdayPercentage: WednesdayGoodDayPercentage,
            ThursdayPercentage: ThursdayGoodDayPercentage,
            FridayPercentage: FridayGoodDayPercentage,
            SaturdaydayPercentage: SaturdayGoodDayPercentage,
            SundayPercentage: SundayGoodDayPercentage,
        });
    }
    function getGoodDayPercentage() {
        test();
        console.log(dailyState);
    }
    return (
        <div>
            <div className="m-auto w-5/6">
                <dl class="mt-5 flex justify-around ...">
                    <div className="text-center">
                    <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Mon</dt>
                            <dd class="text-center">
                                <div class="text-center text-2xl font-semibold text-indigo-600">
                                    {dailyState.MondaydayPercentage}%
                                    <span class=" text-sm font-medium text-white">
                                        {dailyState.MondayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                    <div className="text-center m-auto">
                        <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Tue</dt>
                            <dd class="mt-1 text-center items-baseline md:block ">
                                <div class="text-center items-baseline text-2xl font-semibold text-indigo-600">
                                    {dailyState.TuesdayPercentage}%
                                    <span class="ml-2 text-sm font-medium text-white">
                                        {dailyState.TuesdayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                    <div className="text-center m-auto">
                        <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Wed</dt>
                            <dd class="mt-1 text-center items-baseline md:block ">
                                <div class="text-center items-baseline text-2xl font-semibold text-indigo-600">
                                    {dailyState.WednesdayPercentage}%
                                    <span class="ml-2 text-sm font-medium text-white">
                                        {dailyState.WednesdayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                    <div className="text-center m-auto">
                        <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Thu</dt>
                            <dd class="mt-1 text-center items-baseline md:block ">
                                <div class="text-center items-baseline text-2xl font-semibold text-indigo-600">
                                    {dailyState.ThursdayPercentage}%
                                    <span class="ml-2 text-sm font-medium text-white">
                                        {dailyState.ThursdayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                    <div className="text-center m-auto">
                        <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Fri</dt>
                            <dd class="mt-1 text-center items-baseline md:block ">
                                <div class="text-center items-baseline text-2xl font-semibold text-indigo-600">
                                    {dailyState.FridayPercentage}%
                                    <span class="ml-2 text-sm font-medium text-white">
                                        {dailyState.FridayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                    <div className="text-center m-auto">
                        <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Sat</dt>
                            <dd class="mt-1 text-center items-baseline md:block ">
                                <div class="text-center items-baseline text-2xl font-semibold text-indigo-600">
                                    {dailyState.SaturdaydayPercentage}%
                                    <span class="ml-2 text-sm font-medium text-white">
                                        {dailyState.SaturdayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                    <div className="text-center m-auto">
                        <div class="px- py-2 sm:p-6 bg-lime1 rounded-full h-48 w-48 text-center m-auto">
                            <dt class="text-center text-3xl font-normal text-white">Sun</dt>
                            <dd class="mt-1 text-center items-baseline md:block ">
                                <div class="text-center items-baseline text-2xl font-semibold text-indigo-600">
                                    {dailyState.SundayPercentage}%
                                    <span class="ml-2 text-sm font-medium text-white">
                                        {dailyState.SundayPoststotal} Posts
                                    </span>
                                </div>
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
}
export default DailyStats;