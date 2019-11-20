import React from 'react'
import PropTypes from 'prop-types'

const AboutSection = (props) => {
    return (
        <section id={props.sectionId}>
            <h4>{props.sectionTitle}</h4>
            <article>{props.children}</article>
        </section>
    )
}

AboutSection.propTypes = {
    sectionId: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionContent: PropTypes.string
}

export default AboutSection