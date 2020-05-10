import React from 'react'
import PropTypes from 'prop-types'

const Certificate = props => {
    const { certificate } = props
    return (
        <article id="certificate-wrapper">
            <div id="image-wrapper">
                <img src={certificate.Img} alt="institution logo"/>
            </div>
            <ul id="certificate-details">
                <li id="title">{certificate.Title}</li>
                <li id="institution-name">{certificate.Institution}</li>
                <li id="date">{certificate.Date}</li>
            </ul>
            <a href={certificate.Link} 
                target="_blank" 
                rel="noopener noreferrer"
                id="view-certificate-button" 
                className="page-link-minimal"
            >
                view certificate
            </a>
        </article>
    )
}

Certificate.propTypes = {
    certificate: PropTypes.object.isRequired
}

export default Certificate