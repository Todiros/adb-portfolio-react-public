/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '../layouts/Certificate'

const certArr = () => [0, 1, 2]

const CertificatesContainer = props => {
    return (
        <ul id="certificates-wrapper">
            {certArr().map((id) => 
                <li key={id} className="certificate-item">
                    <Certificate />
                </li>
            )}
        </ul> 
    )
}

CertificatesContainer.propTypes = {

}

export default CertificatesContainer
