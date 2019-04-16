import React from 'react'
import SocialNav from './SocialNav'
import { Link } from 'react-router-dom'

const baseUrl = `${process.env.PUBLIC_URL}`

const Nav = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"

    return (
            <nav id='nav-container' className={positionClass}>
                <ul id="nav">
                    <li>
                        <Link to={`${baseUrl}/`}>HOME</Link>
                    </li>
                    <li>
                        <Link to={`${baseUrl}/about`}>ABOUT</Link> 
                    </li>
                    <li>
                        <Link to={`${baseUrl}/work`}>WORK</Link> 
                    </li>
                    <li>
                        <Link to={`${baseUrl}/contact`}>CONTACT</Link> 
                    </li>
                </ul>
                <SocialNav position={positionClass} />
            </nav>
    )
}

export default Nav