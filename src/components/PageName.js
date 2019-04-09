import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Routes from './routes/routes'

const PageName = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"

    return (
        <section id="page-name-container" className={positionClass}>
            <Switch>
                {Routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.pageName}
                    />
                ))}
            </Switch>
        </section>
    )
}

export default PageName