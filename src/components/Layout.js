/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Nav from './Nav'
import PageName from './PageName'

const Layout = () => {
    return (
        <div id="layout">
            <BrowserRouter basename={'/dev'}>
                <Header />
                <PageName position={'page'}/>
                <ContentWrapper/>
                <Nav position={'page'}/>
            </BrowserRouter> 
        </div>
    );
}

export default Layout;
