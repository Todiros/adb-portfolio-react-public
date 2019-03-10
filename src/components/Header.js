// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import Nav from './Nav'
import PageName from './PageName'

const Header = () => {
    return (
        <header id="header">
            <p className='logo'>MOBILE HEADER</p>
            <PageName position={'header'} name={"HOME"}/>
            <Nav position={'header'}/>
        </header>
    )
}

export default Header