import React, { useState, useContext, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import UserContext from "../../utils/UserContext";
import moment from 'moment';
import EventModal from "../EventModal";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./style.css";

const localizer = momentLocalizer(moment);

// const CURRENT_DATE = moment().local().format("MM/DD/YYYY");

function HistoryCalendar(){

  const {userState, setUserState} = useContext(UserContext);
  // const [badDayDates, setBadDates] = useState([]);
  const [showEvent, setshowEvent] = useState(false);
  const [modalInfo, setModal] = useState({
    id: "",
    day_quality: "", 
    reason: "", 
    gratitude: "",
    date: ""
  });

  // useEffect(() => {
  //   sortBadDays()
  // }, [badDayDates])

  // const eventStyleGetter = () => {
  //   var style = {
  //     backgroundColor: 'blue',
  //     opacity: 0.8,
  //     color: 'white',
  //     height: '30px'
  //   };
  //   return {
  //     style: style
  //   }
  // }

  const handleClick = (event) => {
    console.log(event.resource)
    setModal({
      id: event.resource.id,
      day_quality: event.resource.day_quality,
      reason: event.resource.reason, 
      gratitude: event.resource.gratitude,
      date: event.resource.createdAt
    })
    setshowEvent(true);
    // console.log(modalInfo);
  }


  // console.log(userState)
  // console.log(userState.good_post_array);
  // console.log(userState.bad_post_array);
  // const day = userState.bad_post_array[0].createdAt;
  // const utcDate =  moment.utc(day).toDate();
  // const dayOfWeek = moment(userState.bad_post_array[0].createdAt).local().format("MM/DD/YYYY");
  // console.log(dayOfWeek)

//   function sortBadDays(){
//     let badDates;
//     for (let i = 0; i < userState.bad_post_array.length; i++){
//     badDates = moment(userState.bad_post_array[i].createdAt).local().format("MM/DD/YYYY");
//     badDayDates.push(badDates);
//   }
//   setBadDates(badDayDates)
// }

function createEvents(post_array){
  var Events = [];
  post_array.map(allPosts => {
    const currentDay = moment(allPosts.createdAt).local().format("MM/DD/YYYY");
    const day_quality = allPosts.day_quality;
    if(day_quality === "Bad"){
    const post = {
      allDay: true,
      end: currentDay,
      start: currentDay,
      title: "Bad Post",
      resource: allPosts,
      className: "Bad"
    }
    Events.push(post)
  }else if(day_quality === "Good")
    {
      const post = {
        allDay: true,
        end: currentDay,
        start: currentDay,
        title: "Good Post",
        resource: allPosts,
      }
      Events.push(post)
    }
  })
  return Events;
}

console.log(createEvents(userState.bad_post_array))

      return (
        <div className="rbc-calendar bg-lime1 text-gray-700">
        <Calendar
          popup
          localizer={localizer}
          events={createEvents(userState.all_posts)}
          views={["month"]}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={events => ({
            style: {
              backgroundColor: events.className === "Bad" ? 'red' : 'lightgreen',
              opacity: 0.8,
              color: 'black',
              height: '30px'
            }
          }) 
          }
          onSelectEvent={event => handleClick(event)}
        />
        <div>{showEvent
        ? <EventModal 
        modalInfo={modalInfo}
        setModal={setModal}
        showEvent={showEvent}
        setshowEvent={setshowEvent}
        />
        : <div></div>
      }</div>
      </div>
    )   
  }

  export default HistoryCalendar;