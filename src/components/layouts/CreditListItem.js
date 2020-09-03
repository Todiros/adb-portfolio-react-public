import React from 'react'
import PropTypes from 'prop-types'

const CreditListItem = (props) => {
    return (
        <li className='credit-type-container'>
            <h3 className="credit-title">
                ICONS
            </h3>
            <ul className='credit-list'>
                {
                    props.items.map(item => 
                        <li className='credit-item'>
                            <a href={item.URL}>{item.Title}</a>
                        </li>    
                    )

                }
            </ul>
        </li>
    )
}

CreditListItem.propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default CreditListItem

