/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'

const eduArr = () => [0, 1, 2]

const EducationContainer = props => {
    return (
        <ul id="education-wrapper">
            {eduArr().map(() => 
                <li className="education-item">
                    <Education />
                </li>
            )}
        </ul>
    )
}

EducationContainer.propTypes = {

}

export default EducationContainer
