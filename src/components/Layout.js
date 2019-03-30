// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Nav from './Nav'
import PageName from './PageName'

const Layout = () => {
    return (
        <div id="layout">
            <Header />
            <PageName position={'page'} name={'PAGE'} />
            <ContentWrapper />
            <Nav position={'page'}/>
        </div>
    );
}

export default Layout;
