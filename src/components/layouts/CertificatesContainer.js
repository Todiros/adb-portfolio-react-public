/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '../layouts/Certificate'

import { getSortedObject } from '../../scripts/objectSortByDate'

const CertificatesContainer = props => {
    const certificates = getSortedObject(props.certificates)

    return (
        <ul id="certificates-wrapper">
            {certificates.map((cert) => 
                <li key={cert.Id} className="certificate-item">
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
