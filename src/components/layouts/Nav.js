import React from 'react'
import SocialNav from './SocialNav'
import { Link } from 'react-router-dom'

import _homeIcon from '../../res/menu/home-page-icon.svg'
import _workIcon from '../../res/menu/work-page-icon.svg'
import _contactIcon from '../../res/menu/contact-page-icon.svg'
import _aboutIcon from '../../res/menu/about-page-icon.svg'


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
                        <Link to={`/`}>
                            <img 
                                src={_homeIcon} 
                                alt='nav-home'
                                id='nav-icon' 
                                className='nav-home-icon'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/work`}>
                            <img 
                                src={_workIcon} 
                                id='nav-icon' 
                                className='nav-work-icon' 
                                alt='nav-work'
                            />
                        </Link> 
                    </li>
                    <li>
                        <Link to={`/contact`}>
                            <img 
                                src={_contactIcon} 
                                id='nav-icon' 
                                className='nav-contact-icon' 
                                alt='nav-contact'
                            />
                        </Link> 
                    </li>
                    <li>
                        <Link to={`/about`}>
                            <img 
                                src={_aboutIcon} 
                                id='nav-icon' 
                                className='nav-about-icon' 
                                alt='nav-about'
                            />
                        </Link> 
                    </li>
                </ul>
                <SocialNav position={positionClass} />
            </nav>
    )
}

export default Nav