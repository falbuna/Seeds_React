import React from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

function HistoryCalendar(){

      return (
        <div style={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={[]}
          views={["month"]}
          startAccessor="startDate"
          endAccessor="endDate"
        />
      </div>
    )
       
  }

  export default HistoryCalendar;