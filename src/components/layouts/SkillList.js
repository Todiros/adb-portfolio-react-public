import React from 'react'
import PropTypes from 'prop-types'

const SkillList = props => {
    return (
        <ul id={props.listId}>
            {props.children.map((item) => 
                <li className={props.listItemClass} key={item.id}>{item.Text}</li>
            )}
        </ul>
    )
}

SkillList.propTypes = {
    listId: PropTypes.string.isRequired,
    listItemClass: PropTypes.string.isRequired
}

export default SkillList
