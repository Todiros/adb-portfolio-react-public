import React from 'react'
import PropTypes from 'prop-types'

const Passion = props => {
    const { passion } = props
    return (
        <article>
            {passion.Name}
        </article>
    )
}

Passion.propTypes = {
    passion: PropTypes.object.isRequired
}

export default Passion
