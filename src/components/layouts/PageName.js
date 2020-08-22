import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Routes from '../routes/routes'

const PageName = (props) => {
    /* 
        The component has been used twice -
        in the header as secondary navigation (Header.js) 
        and by itself as the main navigation (Layout.js).
        The positionClass variable dynamically sets the 
        nav element class based on the component position.
        Different styling is used for the different classes (nav.sass) 
    */
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