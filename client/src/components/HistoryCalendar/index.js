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
  const [badDayDates, setBadDates] = useState([]);
  const [showEvent, setshowEvent] = useState(false);
  const [modalInfo, setModal] = useState({
    id: "",
    day_quality: "", 
    reason: "", 
    gratitude: "",
    date: ""
  });

  useEffect(() => {
    sortBadDays()
  }, [badDayDates])

  const eventStyleGetter = () => {
    var style = {
      backgroundColor: 'red',
      opacity: 0.8,
      color: 'white',
      height: '30px'
    };
    return {
      style: style
    }
  }

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

  function sortBadDays(){
    let badDates;
    for (let i = 0; i < userState.bad_post_array.length; i++){
    badDates = moment(userState.bad_post_array[i].createdAt).local().format("MM/DD/YYYY");
    badDayDates.push(badDates);
  }
  setBadDates(badDayDates)
}

function createEvents(post_array){
  var badEvents = [];
  post_array.map(bad_post => {
    const currentDay = moment(bad_post.createdAt).local().format("MM/DD/YYYY");

    bad_post.createdAt = currentDay;
    // const reason = bad_post.reason;
    const post = {
      allDay: true,
      end: currentDay,
      start: currentDay,
      title: "Bad Day",
      resource: bad_post
    }
    badEvents.push(post);
  })
  return badEvents;
}

// console.log(createEvents(userState.bad_post_array))

      return (
        <div className="rbc-calendar bg-lime1 text-white">
        <Calendar
          popup
          localizer={localizer}
          events={createEvents(userState.bad_post_array)}
          views={["month"]}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
          onSelectEvent={event => handleClick(event)}
          // components={{
          //   event: Event
          // }}
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