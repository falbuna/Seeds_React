import React, { useEffect, useState } from "react";
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
        MondayPercentage: 0,
        TuesdayPercentage: 0,
        WednesdayPercentage: 0,
        ThursdayPercentage: 0,
        FridayPercentage: 0,
        SaturdayPercentage: 0,
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
            (MonGood.length / Mon.length) * 100
        );
        if (isNaN(MondayGoodDayPercentage)) {
            MondayGoodDayPercentage = 0
        }
        var TuesdayGoodDayPercentage = Math.round(
            (TueGood.length / Tue.length) * 100
        );
        if (isNaN(TuesdayGoodDayPercentage)) {
            TuesdayGoodDayPercentage = 0
        }
        console.log(TuesdayGoodDayPercentage);
        var WednesdayGoodDayPercentage = Math.round(
            (WedGood.length / Wed.length) * 100
        );
        if (isNaN(WednesdayGoodDayPercentage)) {
            WednesdayGoodDayPercentage = 0
        }
        var ThursdayGoodDayPercentage = Math.round(
            (ThuGood.length / Thu.length) * 100
        );
        if (isNaN(ThursdayGoodDayPercentage)) {
            ThursdayGoodDayPercentage = 0
        }
        var FridayGoodDayPercentage = Math.round(
            (FriGood.length / Fri.length) * 100
        );
        if (isNaN(FridayGoodDayPercentage)) {
            FridayGoodDayPercentage = 0
        }
        var SaturdayGoodDayPercentage = Math.round(
            (SatGood.length / Sat.length) * 100
        );
        if (isNaN(SaturdayGoodDayPercentage)) {
            SaturdayGoodDayPercentage = 0
        }
        var SundayGoodDayPercentage = Math.round(
            (SunGood.length / Sun.length) * 100
        );
        if (isNaN(SundayGoodDayPercentage)) {
            SundayGoodDayPercentage = 0
        }
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
            MondayPercentage: MondayGoodDayPercentage,
            TuesdayPercentage: TuesdayGoodDayPercentage,
            WednesdayPercentage: WednesdayGoodDayPercentage,
            ThursdayPercentage: ThursdayGoodDayPercentage,
            FridayPercentage: FridayGoodDayPercentage,
            SaturdayPercentage: SaturdayGoodDayPercentage,
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
                <dl className="mt-5 flex justify-around flex-wrap">
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Mon</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.MondayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.MondayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Tue</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.TuesdayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.TuesdayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Wed</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.WednesdayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.WednesdayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Thu</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.ThursdayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.ThursdayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Fri</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.FridayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.FridayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Sat</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.SaturdayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.SaturdayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                    <div className="text-center pr-2 border-r-2 ">
                        <dt className="text-center text-3xl font-normal text-white">Sun</dt>
                        <dd className="text-center">
                            <div className="text-center text-2xl font-semibold text-lime1">
                                {dailyState.SundayPercentage}%
                            </div>
                            <div className=" text-sm font-medium text-white">
                                {dailyState.SundayPoststotal} Posts
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
export default DailyStats;