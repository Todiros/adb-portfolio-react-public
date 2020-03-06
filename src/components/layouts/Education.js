/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Education = props => {
    return (
        <article className="education-wrapper">
            <div className="image-wrapper">
                <img src="https://via.placeholder.com/70" alt="institution logo"/>
            </div>
            <ul className="education-details">
                <li className="institution-name">Institution</li>
                <li className="title">Title</li>
                <li className="date">Date</li>
            </ul>
        </article>
    )
}

Education.propTypes = {

}

export default Education
