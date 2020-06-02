/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ContentWrapper from './layouts/ContentWrapper'
import Header from './layouts/Header'
import Nav from './layouts/Nav'
import PageName from './layouts/PageName'

const Layout = () => {
    return (
        <div id="layout">
            <BrowserRouter basename={'/'}>
                <Header />
                <PageName position={'page'}/>
                <ContentWrapper/>
                <Nav position={'page'}/>
            </BrowserRouter> 
        </div>
    );
}

export default Layout;
