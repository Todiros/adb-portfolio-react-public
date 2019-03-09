// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Nav from './Nav'

const Layout = () => {
    return (
        <div id="layout">
            <Header />
            <ContentWrapper />
            <Nav />
        </div>
    );
}

export default Layout;
