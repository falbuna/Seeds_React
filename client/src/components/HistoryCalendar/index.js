import React, { Children, useState, useContext, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import UserContext from "../../utils/UserContext";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./style.css";


const localizer = momentLocalizer(moment);

const CURRENT_DATE = moment().local().format("MM/DD/YYYY");

function HistoryCalendar(){

  const {userState, setUserState} = useContext(UserContext);
  const [badDayDates, setBadDates] = useState([]);

  useEffect(() => {
    sortBadDays()
  }, [badDayDates])

  const ColoredDateCellWrapper = ({children, value}) => {
    // console.log(value)
    // console.log(myDate)
    let valueDay = moment(value).format("MM/DD/YYYY")
    // console.log(valueDay)
    let cellStyle = React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor: valueDay === CURRENT_DATE ? 'lightgreen' : '',
        },
    })
  return cellStyle;
  }

  const eventStyleGetter = () => {
    var style = {
      backgroundColor: 'red',
      opacity: 0.8,
      color: 'black',
      height: '500px'
    };
    return {
      style: style
    }
  }
  
  console.log(userState.good_post_array);
  console.log(userState.bad_post_array);
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
  let badEvents = [];
  post_array.map(bad_post => {
    const currentDay = moment(bad_post.createdAt).local().format("MM/DD/YYYY");
    const post = {
      allDay: true,
      end: currentDay,
      start: currentDay,
      // title: 'Bad day',
    }
    badEvents.push(post);
  })
  return badEvents;
}

console.log(createEvents(userState.bad_post_array))

      return (
        <div className="rbc-calendar">
        <Calendar
          localizer={localizer}
          events={createEvents(userState.bad_post_array)}
          views={["month"]}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
          components={{
            dateCellWrapper: ColoredDateCellWrapper
          }}
        />
      </div>
    )
       
  }

  export default HistoryCalendar;