/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '../layouts/Certificate'

const CertificatesContainer = props => {
    return (
        <ul id="certificates-wrapper">
            {props.certificates.map((cert) => 
                <li key={cert.id} className="certificate-item">
                    <Certificate certificate={cert}/>
                </li>
            )}
        </ul> 
    )
}

CertificatesContainer.propTypes = {
    certificates: PropTypes.array.isRequired
}

export default CertificatesContainer
