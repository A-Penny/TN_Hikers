import React from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Schedule() {
    const [value, onChange] = React.useState(new Date());
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    function onClickDay(value, event) {
        onChange(value);
         
    }
    let month = months[value.getMonth()]
    
        return (
            <div className='schedule-container'>
                <h1>Hike Calendar</h1>
                <Calendar 
                    onChange={onChange} 
                    value={value}
                    calendarType='US'
                    onClickDay={onClickDay}
                    tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDate() === 19 && date.getMonth() === 2 ? <p>Church!</p> : null}
                    />
                <p>What's happening on {month} {value.getDate()}?</p>
                <div className='no-event-date'>
                    <h1>There's nothing happening on this date...</h1>
                    <Popup
                        trigger={<button className="button"> Create a Hike </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div className="header"> Create a hike for {month} {value.getDate()} </div>
                            <div className="content">
                            {' '}
                            Where would you like to hike?
                            <br />
                            How many nights will you be spending ?
                            </div>
                            <div className="actions">
                            <Popup
                                trigger={<button className="button"> Submit </button>}
                                position="top center"
                                nested
                            >
                                <span>
                                When submit is clicked, the user, date, location and nights will be submitted to the database.
                                </span>
                            </Popup>
                            <button
                                className="button"
                                onClick={() => {
                                console.log('modal closed ');
                                close();
                                }}
                            >
                                Cancel
                            </button>
                            </div>
                        </div>
                        )}
                    </Popup>
                </div>
            </div>
            
            
        )
    }