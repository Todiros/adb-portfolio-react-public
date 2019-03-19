// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

const PageName = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"
    return (
        <section id="page-name-container" className={positionClass}>
            <p className='page-name'>{`// ${props.name}`}</p>
        </section>
    )
}

export default PageName