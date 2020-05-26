import React from 'react'
import PropTypes from 'prop-types'
import Passion from './Passion'

const PassionsContainer = props => {
    return (
        <ul id='passions-container'>
           {props.passions.map((passion) =>
               <li className='passion-item' key={passion.Id}>
                   <Passion passion={passion} />
               </li>
           )}
        </ul>
    )
}

PassionsContainer.propTypes = {
    passions: PropTypes.array.isRequired
}

export default PassionsContainer

