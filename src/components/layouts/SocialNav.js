// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

import _codepenIcon from '../../res/social/codepen.svg'
import _linkedinIcon from '../../res/social/linkedin.svg'
import _githubIcon from '../../res/social/github.svg'

const SocialNav = (props) => {
    const positionClass = props.position === "header" ? "header" : "page"

    return (
        <section id='social-nav-container' className={positionClass}>
            <ul className='social-nav'>
                <li>
                    <a href='https://codepen.io' target='_blank' rel="noopener noreferrer">
                        <img 
                            src={_codepenIcon} 
                            id='social-nav-icon' 
                            className='nav-codepen-icon' 
                            alt='codepen'
                        />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer">
                        <img 
                            src={_linkedinIcon} 
                            id='social-nav-icon' 
                            className='nav-linkedin-icon' 
                            alt='linkedin'
                        />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Todiros' target='_blank' rel="noopener noreferrer">
                        <img 
                            src={_githubIcon} 
                            id='social-nav-icon' 
                            className='nav-github-icon' 
                            alt='github'
                        />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default SocialNav
