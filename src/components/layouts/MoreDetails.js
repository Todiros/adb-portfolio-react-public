import React from 'react'
import PropTypes from 'prop-types'

const MoreDetails = props => {
    const {status, type, challenges} = props.details

    return (
        <div className="more-details-wrapper">
            <section className='more-details'>
                <ul className="status-type">
                    <li className="status">
                        <span className="status-heading">status: </span>
                        { status }
                    </li>
                    <li className="type">
                        <span className="type-heading">type: </span>
                        { type }
                    </li>
                </ul>
                <ul className="challenges">
                    {
                        challenges.map(challenge => 
                            <li className="challenge"> {challenge}</li>
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
