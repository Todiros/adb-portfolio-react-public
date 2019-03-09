// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

const Nav = (props) => {
    const deviceClass = props.device === "tablet" ? "tablet" : "mobile"
    return (
        <nav id='nav-container' className={deviceClass}>
            <ul id="nav">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>WORK</li>
                <li>CONTACTS</li>
            </ul>
        </nav>
    )
}

export default Nav