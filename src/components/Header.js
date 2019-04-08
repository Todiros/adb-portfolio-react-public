import React from 'react'

import Nav from './Nav'
import PageName from './PageName'

const Header = () => {
    return (
        <header id="header">
            <span className='header-background'></span>
            <p className='logo'>WEBSITE LOGO</p>
            <PageName position={'header'}/>
            <Nav position={'header'}/>
        </header>
    )
}

export default Header