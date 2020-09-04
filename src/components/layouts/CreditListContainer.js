import React from 'react'
import PropTypes from 'prop-types'

const CreditListContainer = (props) => {
    return (
        <li className='credit-type-container'>
            <h3 className="credit-title">
                {props.type}
            </h3>
            <ul className='credit-list'>
                {
                    props.items.map(item => 
                        <li className='credit-item'>
                            <a href={item.URL} className='credit-link' id='external-link'>{item.Title}</a>
                        </li> 
                    )

                }
            </ul>
        </li>
    )
}

CreditListContainer.propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default CreditListContainer

