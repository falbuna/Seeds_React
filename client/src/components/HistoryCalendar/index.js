import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import "./style.css"

function HistoryCalendar(){

    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
      }

      return (
        <div>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
      )
    }

  export default HistoryCalendar;