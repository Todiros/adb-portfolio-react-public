// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

const PageName = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"
    return (
        <div id="page-name" className={positionClass}>
            {props.name}
        </div>
    )
}

export default PageName