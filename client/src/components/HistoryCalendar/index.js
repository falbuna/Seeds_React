import React, { Children, useState, useContext, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import UserContext from "../../utils/UserContext";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


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
            backgroundColor: valueDay == myDate ? 'red' : '',
        },
    });
    return cellStyle;
  }

  console.log(userState.good_post_array);
  console.log(userState.bad_post_array);
  const day = userState.good_post_array[0].createdAt;
  // console.log(day)
  const utcDate =  moment.utc(day).toDate();
  const myDate = moment(utcDate).local().format("MM/DD/YYYY");
  console.log(myDate)
  console.log(CURRENT_DATE);

  function sortBadDays(){
    let badDates;
    for (let i = 0; i < userState.bad_post_array.length; i++){
    badDates = moment(userState.bad_post_array[i].createdAt).local().format("MM/DD/YYYY");
    console.log(badDates)
    badDayDates.push(badDates);
  }
  setBadDates(badDayDates)
}

console.log(badDayDates)

      return (
        <div style={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={[]}
          views={["month"]}
          startAccessor="startDate"
          endAccessor="endDate"
          components={{
            dateCellWrapper: ColoredDateCellWrapper
          }}
        />
      </div>
    )
       
  }

  export default HistoryCalendar;