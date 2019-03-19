// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import Nav from './Nav'
import PageName from './PageName'
import SocialNav from './SocialNav';

const Header = () => {
    return (
        <header id="header">
            <p className='logo'>MOBILE HEADER</p>
            <PageName position={'header'} name={"HOME"}/>
            <Nav position={'header'}/>
            <SocialNav position={'header'}/>
        </header>
    )
}

export default Header