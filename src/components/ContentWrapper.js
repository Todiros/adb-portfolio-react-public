import React from 'react'
import { Route } from 'react-router-dom'

import Routes from './routes/routes'

const ContentWrapper = () => {
    return (
        <main id="content-wrapper">
            {Routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.content}
                />
            ))}
        </main>
    )
}

export default ContentWrapper;