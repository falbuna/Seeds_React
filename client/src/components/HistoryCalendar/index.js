import React, { useState, useContext, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import UserContext from "../../utils/UserContext";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./style.css";

const localizer = momentLocalizer(moment);

// const CURRENT_DATE = moment().local().format("MM/DD/YYYY");

function HistoryCalendar(){

  const {userState, setUserState} = useContext(UserContext);
  const [badDayDates, setBadDates] = useState([]);
  const [showEvent, setshowEvent] = useState(false);
  const [modalInfo, setModal] = useState({day_quality: "", reason: "", gratitude: ""});

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
      day_quality: event.resource.day_quality,
      reason: event.resource.reason, 
      gratitude: event.resource.gratitude
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
        ? <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
      
          
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div> */}
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Reason for your bad day:
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {modalInfo.reason}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {/* <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Deactivate
              </button> */}
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setshowEvent(!showEvent)} >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
        : <div></div>
      }</div>
      </div>
    )   
  }

  export default HistoryCalendar;