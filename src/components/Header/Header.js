import React from 'react';
import logo from '../../img/thikerslogo.png';
import './Header.css';

export default function Header() {
    return (
        
        <header className='header-container'>
            <img src={logo} alt="hikers logo" />
            
                <ul className="nav-bar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
                <select>
                    <option value="#">Home</option>
                    <option value="#">Schedule</option>
                    <option value="#">Login</option>
                    <option value="#">Register</option>
                </select>   
        </header>
        )
   }