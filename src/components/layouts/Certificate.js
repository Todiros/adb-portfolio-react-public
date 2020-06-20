import React from 'react'
import PropTypes from 'prop-types'

const Certificate = props => {
    const { certificate } = props
    return (
        <article id="certificate-wrapper">
            {/* If there isn't an image link present, it renders a bullet point */}
            {!certificate.Img ? 
                <span className='bullet-point'>{'\u2022'}</span> :
                <div id="image-wrapper">
                    <img src={certificate.Img} alt="institution logo"/>
                </div>
            }
            
            <ul id="certificate-details">
                <li id="title" title='name of the certificate'><h4>{certificate.Title}</h4></li>
                <li id="institution-name" title='name of the institution'>{certificate.Institution}</li>
                <li id="date" title='date of completion'>{certificate.Date}</li>
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