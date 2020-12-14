import React, { useEffect, useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import Metrics from "../components/Metrics/Metrics";
import DailyStats from '../components/Stats';
import Title from "../components/Title";
import NewMember from "../components/NewMember";
import HistoryCalendar from '../components/HistoryCalendar';



function Members() {

  const {userState, setUserState} = useContext(UserContext);
  
    useEffect(() => {
    if( !userState.postsRetrieved){
      window.location.reload()
    }
    }, [userState])

  return (
    <div>
      {
        userState.all_posts.length == 0
          ? <NewMember name={userState.userName} />
          : <div className="App">
          <div className="bg-lime1">
            <div className="p-auto max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="max-w-4xl mx-auto text-center font-bold">
                <h2 className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10">
                  Welcome <span className="member-name">{userState.userName}</span>
                </h2>
                  {/* <Gravatar email={userState.userEmail} size={75} /> */}
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
                    {userState.totalPosts}
                  </dd>
                </div>
                <div className="flex flex-col mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white text-opacity-75">
                    Good Day %
              </dt>
                  <dd className="order-1 text-5xl leading-none font-extrabold text-white">
                    <span id="totalGoodDayCalc">{userState.good_day_percentage}</span>
                  </dd>
                </div>
                <div className="flex flex-col mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white text-opacity-75">
                    Current Streak
              </dt>
                  <dd id="totalGoodDayStreak" className="order-1 text-5xl leading-none font-extrabold text-white">
                    {userState.currentGoodDayStreak}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <Metrics goodPosts={userState.good_post_array} badPosts={userState.bad_post_array} allPostsArray={userState.all_posts} />
          <Title>
              Day Metrics
          </Title>
          <DailyStats allPostsArray={userState.all_posts}></DailyStats>
          <div>
            <div>
              <div className="p-auto max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center font-bold">
                  <div className="text-md text-white">
                    <Title>
                      Calendar
                    </Title>
                    <HistoryCalendar />
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      }
      </div>

  );
}
export default Members;