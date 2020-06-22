/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'

import { getSortedObject } from '../../scripts/objectSortByDate'

const EducationContainer = props => {
    const education = getSortedObject(props.education)

    return (
        <ul id="education-wrapper">
            {education.map((edu) => 
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
