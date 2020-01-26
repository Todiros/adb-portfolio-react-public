import React from 'react'
import PropTypes from 'prop-types'

const SkillList = props => {
    return (
        <ul id={props.listId}>
            {props.children.map((item) => 
                <li className={props.listItemClass} key={item}>{item}</li>
            )}
        </ul>
    )
}

SkillList.propTypes = {
    listId: PropTypes.string.isRequired,
    listItemClass: PropTypes.string.isRequired,
    listItemContent: PropTypes.array
}

export default SkillList
