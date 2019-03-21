// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

const SocialNav = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"
    return (
        <section id='social-nav-container' className={positionClass}>
            <ul className='social-nav'>
                <li>Codepen</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
            </ul>
        </section>
    )
}

export default SocialNav
