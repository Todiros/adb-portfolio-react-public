import React from 'react'
import SocialNav from './SocialNav'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"

    return (
            <nav id='nav-container' className={positionClass}>
                <ul id="nav">
                    <li>
                        <Link to={`/`}>HOME</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>ABOUT</Link> 
                    </li>
                    <li>
                        <Link to={`/work`}>WORK</Link> 
                    </li>
                    <li>
                        <Link to={`/contact`}>CONTACT</Link> 
                    </li>
                </ul>
                <SocialNav position={positionClass} />
            </nav>
    )
}

export default Nav