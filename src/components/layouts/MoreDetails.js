import React from 'react'
import PropTypes from 'prop-types'

const MoreDetails = props => {
    return (
        <section id='more-details'>
            <ul className="status-type">
                <li className="status">
                    <h5 id="status-heading">status</h5>
                    {/* TODO: props.status */}
                </li>
                <li className="type">
                    <h5 id="type-heading">type</h5>
                    {/* TODO: props.type */}
                </li>
            </ul>
            <ul className="challenges">
                <li className="challenge">
                    {/* TODO: props.challenge */}
                </li>
                <li className="challenge">
                    {/* TODO: props.challenge */}
                </li>
            </ul>
        </section>
    )
}

MoreDetails.propTypes = {
    details: PropTypes.object.isRequired,
}

export default MoreDetails
