import React from 'react'
import PropTypes from 'prop-types'
import Passion from './Passion'

const PassionsContainer = props => {
    return (
        <ul>
           {props.passions.map((passion) =>
               <li>
                   <Passion key={passion.Id} passion={passion} />
               </li>
           )}
        </ul>
    )
}

PassionsContainer.propTypes = {
    passions: PropTypes.array.isRequired
}

export default PassionsContainer

