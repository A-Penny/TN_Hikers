import React from 'react';
import background from '../../img/background.jpeg';

export default function Background() {
    return (
        <div className="background">
                <img src={background} alt="mountains picture"/>
                <div class="background-text">
                    <p id="test-print">Welcome to the Tennessee Hikers website. Explore any upcoming trips and do some research.</p>
                    <p>Let's hike!</p>
                </div>
                
            </div>
    )
}