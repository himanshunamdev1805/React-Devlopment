import React from 'react';
import  '../App.css'

import img from '../images/download.png'
export default function Header() {
    return (
        <header className="header">
            <img 
                src={img} 
                className="header--image"
            />
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}