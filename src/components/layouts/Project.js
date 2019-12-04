import React from 'react'
import PropTypes from 'prop-types'

const Project = props => {
    return (
        <article className='work-project'>
            <h4 id="project-title">Project Name</h4>
            <img src='https://www.topsoft.am/media/1010/how-to-create-a-website-feature-image.jpg' alt="project" width="300px"/>
            <ul id="project-links">
                <li className="project-live">live</li>
                <li className="project-code">code</li>
            </ul>
        </article>
    )
}

Project.propTypes = {

}

Project.defaultProps = {

}

export default Project
