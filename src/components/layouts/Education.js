/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Education = props => {
    const { education } = props
    return (
        <article className="education-wrapper">
            <div className="image-wrapper">
                <img src={education.Img} alt="institution logo"/>
            </div>
            <ul className="education-details">
                <li className="institution-name">{education.Institution}</li>
                <li className="title">{education.Title}</li>
                <li className="date">{education.Date}</li>
            </ul>
        </article>
    )
}

Education.propTypes = {
    education: PropTypes.object.isRequired
}

export default Education
