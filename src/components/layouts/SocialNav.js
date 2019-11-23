// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

const SocialNav = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"

    return (
        <section id='social-nav-container' className={positionClass}>
            <ul className='social-nav'>
                <li>
                    <a href='https://codepen.io' target='_blank' rel="noopener noreferrer">Codepen</a>
                </li>
                <li>
                    <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href='https://github.com/Todiros' target='_blank' rel="noopener noreferrer">GitHub</a>
                </li>
            </ul>
        </section>
    )
}

export default SocialNav
