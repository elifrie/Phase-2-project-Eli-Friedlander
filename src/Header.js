import React from 'react';
import About from './About';
import {NavLink} from 'react-router-dom';

function Header() {

return(
        <div className='App-header'>
            <h1 className='titleBar'>Christopher Nolan Filmography</h1>
            <h2 className='headerBar'>
                <NavLink to = "/" className = "nav-link">
                Home
                </NavLink>
            </h2>
            <h2 className='headerBar'>
                <NavLink to = "/about" className = "nav-link">
                About
                </NavLink>
            </h2>
            <h2 className='headerBar'>
                 <NavLink to = "/new-movie" className = "nav-link">
                New Movie
                </NavLink>
                </h2>
        </div>
)


}



export default Header 