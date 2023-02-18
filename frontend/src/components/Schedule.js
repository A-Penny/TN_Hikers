import React from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function Schedule() {
    const [value, onChange] = React.useState(new Date());
    
        return (
            <div className='schedule-container'>
                <h1>Upcoming Hikes</h1>
                <Calendar onChange={onChange} value={value}/>
            </div>
            
        )
    }