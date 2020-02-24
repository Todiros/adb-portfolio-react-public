/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '../layouts/Certificate'

const CertificatesContainer = props => {
    return (
        <ul id="certificates-wrapper">
            <li className="certificate-item">
                <Certificate />
            </li>
            <li className="certificate-item">
                <Certificate />
            </li>
            <li className="certificate-item">
                <Certificate />
            </li>
        </ul> 
    )
}

CertificatesContainer.propTypes = {

}

export default CertificatesContainer
