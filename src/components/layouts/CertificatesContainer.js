/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Certificate from '../layouts/Certificate'

import objectSortByDate from '../../scripts/objectSortByDate'

const CertificatesContainer = props => {
    // sorts certificates by year and then by month in descending order
    const certificates = props.certificates.sort(
        (a, b) => objectSortByDate(a, b, 'year', -1) ? 1 : 
            (objectSortByDate(a, b, 'year') ? 
                (objectSortByDate(a, b, 'month', -1) ? 1 : -1) 
            : -1)
    )

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
