// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import SocialNav from './SocialNav';

const Nav = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"
    return (
        <nav id='nav-container' className={positionClass}>
            <ul id="nav">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>WORK</li>
                <li>CONTACTS</li>
            </ul>
            <SocialNav className={positionClass} />
        </nav>
    )
}

export default Nav