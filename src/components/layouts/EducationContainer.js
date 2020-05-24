/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'

const EducationContainer = props => {
    return (
        <ul id="education-wrapper">
            {props.education.map((edu) => 
                <li key={edu.Id} className="education-item">
                    <Education education={edu}/>
                </li>
            )}
        </ul>
    )
}

EducationContainer.propTypes = {
    education: PropTypes.array.isRequired
}

export default EducationContainer
