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
                <li className="institution-name" title='name of the institution'><h4>{education.Institution}</h4></li>
                <li className="title" title='name of study'>{education.Title}</li>
                <li className="date" title='date of graduation'>{education.Date}</li>
            </ul>
        </article>
    )
}

Education.propTypes = {
    education: PropTypes.object.isRequired
}

export default Education
