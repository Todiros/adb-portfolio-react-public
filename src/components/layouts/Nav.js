import React from 'react'
import SocialNav from './SocialNav'
import { NavLink } from 'react-router-dom'

import _homeIcon from '../../res/menu/home-page-icon.svg'
import _workIcon from '../../res/menu/work-page-icon.svg'
import _contactIcon from '../../res/menu/contact-page-icon.svg'
import _cvIcon from '../../res/menu/cv-page-icon.svg'


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
                        <NavLink exact to={`/`} activeClassName={'nav-icon-active'}>
                            <img 
                                src={_homeIcon} 
                                alt='nav-home'
                                id='nav-icon' 
                                className='nav-home-icon'
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/work`} activeClassName='nav-icon-active'>
                            <img 
                                src={_workIcon} 
                                alt='nav-work'
                                id='nav-icon' 
                                className='nav-work-icon' 
                            />
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to={`/contact`} activeClassName='nav-icon-active'>
                            <img 
                                src={_contactIcon} 
                                alt='nav-contact'
                                id='nav-icon' 
                                className='nav-contact-icon' 
                            />
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to={`/cv`} activeClassName='nav-icon-active'>
                            <img 
                                src={_cvIcon} 
                                alt='nav-cv'
                                id='nav-icon' 
                                className='nav-cv-icon' 
                            />
                        </NavLink> 
                    </li>
                </ul>
                <SocialNav position={positionClass} />
            </nav>
    )
}

export default Nav