import React from 'react'
import PropTypes from 'prop-types'

// The CV sections within the About page (AboutPage.js)
const AboutSection = (props) => {
    return (
        <section id={props.sectionId}>
            <h4>{props.sectionTitle}</h4>
            {props.children}
        </section>
    )
}

AboutSection.propTypes = {
    sectionId: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionContent: PropTypes.string
}

export default AboutSection