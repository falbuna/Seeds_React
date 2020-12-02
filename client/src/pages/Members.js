import React, { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Auth from "../utils/Auth";
import Metrics from "../components/Metrics/Metrics"


//Matt Milici adds
import API from "../utils/API"
// Matt Milici adds



function Members() {

  const [User, setUser] = useState({ userName: "", user_id: "", good_day_percentage: 0, good_post_array: [], bad_post_array: [] });
  const [userDataRetrieved, setUserDataRetrieved] = useState(false);
  const [postDataRetrieved, setPostDataRetrieved] = useState(false);

  // const { isLoggedin, userData, postsData, reasonsData } = useContext(UserContext);
  useEffect(function () {
    Auth.getUser()
      .then(function (res) {
        // console.log(res)
        setUser({ ...User, user_id: res.data.id, userName: res.data.name });
        // console.log(res.data.name);
        setUserDataRetrieved(true);
      })
  }, [])

  useEffect(function () {
    if (userDataRetrieved) {
      // console.log("working")
      // console.log(User)
      getPosts()
    }
      
  }, [userDataRetrieved])


  //Matt Milici adds
  function getPosts() {
    API.getPost({
      user_id: User.user_id
    }).then(function (PostData) {
      // console.log(PostData)
      // console.log("working")
      filterDayQuality(PostData)
    })
  }

  function filterDayQuality(Post) {
    var good_array = []
    var bad_array = []
    for (let i = 0; i < Post.data.length; i++) {
      if (Post.data[i].day_quality === "Good") {
        good_array.push(Post.data[i]);
      } else {
        bad_array.push(Post.data[i])
      }
    }
    setUser({ ...User, bad_post_array: bad_array, good_post_array: good_array });
    setPostDataRetrieved(true);
    // console.log(User)
    console.log(good_array)
    console.log(bad_array)
  }
  // Matt Milici adds

  useEffect(function () {
    console.log(User);
  }, [User])

  return (
    <div>
      {
        !userDataRetrieved
          ? <div>
            just wait
        </div>
          : !postDataRetrieved
            ? <div>Keep waiting</div>
            : <div className="App">
            <div className="bg-lime1">
              <div className="p-auto max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center font-bold">
                  <h2 className="text-3xl leading-9 text-white sm:text-4xl sm:leading-10">
                    Welcome <span className="member-name">{User.userName}</span>
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
                      <span id="totalGoodDayCalc">{User.good_day_percentage}</span>
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
            <Metrics />
          </div>

      }
    </div>


  );
}
export default Members;