import React from 'react';
import Schedule from './Schedule';
import HikingFacts from './HikingFacts';
import '../App.css'

export default function CenterContainer( ) {
    return(
        <div className='center-container'>
            <Schedule />
            <HikingFacts />
            
        </div>
        
    )
}