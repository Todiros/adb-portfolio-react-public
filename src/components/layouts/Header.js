import React from 'react'

import Nav from './Nav'
import PageName from './PageName'

const Header = () => {
    return (
        <header id="header">
            <span className='header-background'></span>
            <img src='https://via.placeholder.com/120x60' 
                id='logo' 
                className='logo-mobile' 
                alt='ADB Studios'/>
            <PageName position={'header'}/>
            <Nav position={'header'}/>
        </header>
    )
}

export default Header