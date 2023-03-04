import React from 'react';
import Title from './Title';  
import CenterContainer from './CenterContainer';
import '../App.css';



export default function MainContent() {
    return (
        <main className='main-container'>
             
             <Title name='Steven'/>
            <CenterContainer />
            
            
            
        </main>
    )
}