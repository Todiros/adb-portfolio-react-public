import React from 'react'
import SocialNav from './SocialNav'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    /* 
        The component has been used twice -
        in the header as secondary navagation (Header.js) 
        and by itself as the main navigation (Layout.js).
        The positionClass variable dynimically sets the 
        nav element class based on the component position.
        Different styling is used for the different classes (nav.sass) 
    */
    const positionClass = props.position === "header" ? "header" : "page"

    return (
            <nav id='nav-container' className={positionClass}>
                <ul id="nav">
                    <li>
                        <Link to={`/`}>HOME</Link>
                    </li>
                    <li>
                        <Link to={`/work`}>WORK</Link> 
                    </li>
                    <li>
                        <Link to={`/contact`}>CONTACT</Link> 
                    </li>
                    <li>
                        <Link to={`/about`}>ABOUT</Link> 
                    </li>
                </ul>
                <SocialNav position={positionClass} />
            </nav>
    )
}

export default Nav