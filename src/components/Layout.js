import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Nav from './Nav'
import PageName from './PageName'

const Layout = () => {
    return (
        <div id="layout">
            <Router>
                <Header />
                <PageName position={'page'}/>
                <ContentWrapper/>
                <Nav position={'page'}/>
            </Router>
        </div>
    );
}

export default Layout;
