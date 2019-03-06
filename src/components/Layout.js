// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import NavContainer from './NavContainer'
import HeaderContainer from './HeaderContainer'
import ContentWrapper from './ContentWrapper'

const Layout = () => {
    return (
        <div id="layout">
            <HeaderContainer />
            <ContentWrapper />
            <NavContainer />
        </div>
    );
}

export default Layout;
