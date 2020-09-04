import React from 'react'
import PropTypes from 'prop-types'

// The CV sections within the CV page (CVPage.js)
const CVElement = (props) => {
    return (
        <section id={props.sectionId}>
            <h4>{props.sectionTitle}</h4>
            {props.children}
        </section>
    )
}

CVElement.propTypes = {
    sectionId: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionContent: PropTypes.string
}

export default CVElement