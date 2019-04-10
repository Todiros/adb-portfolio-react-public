import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Nav from './Nav'
import PageName from './PageName'

const history = createBrowserHistory({
    basename: '/adbstudios.cc'
})

const Layout = () => {
    return (
        <div id="layout">
            <Router history={history}>
                <Header />
                <PageName position={'page'}/>
                <ContentWrapper/>
                <Nav position={'page'}/>
            </Router>
        </div>
    );
}

export default Layout;
