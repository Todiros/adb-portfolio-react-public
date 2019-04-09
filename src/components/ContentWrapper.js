import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Routes from './routes/routes'

const ContentWrapper = () => {
    return (
        <main id="content-wrapper">
            <Switch>
                {Routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.content}
                    />
                ))}
            </Switch>
        </main>
    )
}

export default ContentWrapper;