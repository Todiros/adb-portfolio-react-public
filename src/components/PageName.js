import React from 'react'
import { Route } from 'react-router-dom'
import Routes from './routes/routes'

const PageName = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"

    return (
        <section id="page-name-container" className={positionClass}>
            {Routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.pageName}
                />
            ))}
        </section>
    )
}

export default PageName