import React from 'react';
import './Title.css'

export default function Title(props) {
    return (
        <h1 className='title'>Welcome, {props.name}</h1>
    )
}