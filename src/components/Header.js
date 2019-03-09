// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import Nav from './Nav'
import PageName from './PageName'

const Header = () => {
    return (
        <header id="header">
            <p>MOBILE HEADER</p>
            <PageName name={"HOME"}/>
            <Nav device={"tablet"}/>
        </header>
    )
}

export default Header