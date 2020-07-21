import React from 'react'
import PropTypes from 'prop-types'

// The details section of the project component (Project.js)
const MoreDetails = props => {
    const {Status, Type, WIL} = props.details

    return (
        <div className="more-details-wrapper">
            <section className='more-details'>
                <ul className="status-type">
                    <li className="status">
                        <span className="status-heading">status: </span>
                        { Status }
                    </li>
                    <li className="type">
                        <span className="type-heading">type: </span>
                        { Type }
                    </li>
                </ul>
                <ul className="challenges">
                    {
                        WIL.map(challenge => 
                            <li className="challenge" key={challenge}> {challenge}</li>
                        )
                    }
                </ul>
            </section>
        </div>
    )
}

MoreDetails.propTypes = {
    details: PropTypes.object.isRequired,
}

export default MoreDetails
