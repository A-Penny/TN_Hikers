import React from 'react';
import '../App.css'


export default function Title(props) {
    return (
        <h1 className='title'>Welcome, {props.name}</h1>
    )
}