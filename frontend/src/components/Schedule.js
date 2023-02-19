import React from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function Schedule() {
    const [value, onChange] = React.useState(new Date());
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    function onClickDay(value, event) {
        onChange(value);
         
    }
    let month = months[value.getMonth()]
    
        return (
            <div className='schedule-container'>
                <h1>Upcoming Hikes</h1>
                <Calendar 
                    onChange={onChange} 
                    value={value}
                    calendarType='US'
                    onClickDay={onClickDay}
                    tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDate() === 19 && date.getMonth() === 2 ? <p>Church!</p> : null}
                    />
                <p>What's happening on {month} {value.getDate()}?</p>
            </div>
            
            
        )
    }