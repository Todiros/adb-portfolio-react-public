/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'

const EducationContainer = props => {
    return (
        <ul id="education-wrapper">
            <li className="education-item">
                <Education />
            </li>
            {/* <li className="education-item">School 2</li>
            <li className="education-item">School 3</li> */}
        </ul>
    )
}

EducationContainer.propTypes = {

}

export default EducationContainer
