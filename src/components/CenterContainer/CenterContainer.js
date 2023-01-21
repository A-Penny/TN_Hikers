import React from 'react';
import Schedule from '../Schedule/Schedule';
import HikingFacts from '../HikingFacts/HikingFacts';
import './CenterContainer.css';

export default function CenterContainer( ) {
    return(
        <div className='center-container'>
            <Schedule />
            <HikingFacts />
            
        </div>
        
    )
}