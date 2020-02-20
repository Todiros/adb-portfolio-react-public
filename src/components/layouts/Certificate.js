import React from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

const Certificate = props => {
    return (
        <article id="certificate-wrapper">
            <div id="image-wrapper">
                <img src="https://via.placeholder.com/70" alt="institution logo"/>
            </div>
            <ul id="certificate-details">
                <li id="title">Title</li>
                <li id="institution-name">Institution</li>
                <li id="date">Date</li>
            </ul>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" id="view-certificate-button" className="page-link-minimal">view certificate</a>
        </article>
    )
}

Certificate.propTypes = {

}

export default Certificate