import React from 'react'
import PropTypes from 'prop-types'

const Project = props => {
    return (
        <article className='work-project'>
            <h4 id="project-title">{props.name}</h4>
            <img src={props.image} alt="project" className='project-thumbnail'/>
            <ul id="project-links">
                <li className="project-live"><a href={props.live} target='_blank' rel='noopener noreferrer'>live</a></li>
                <li className="project-code"><a href={props.code} target='_blank' rel='noopener noreferrer'>code</a></li>
            </ul>
            <p className="project-description">{props.description}</p>
            <section className='more-details'>
                <button id="click-for-more" className='custom-button'>more details</button>
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
        </article>
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    live: PropTypes.string,
    code: PropTypes.string.isRequired
}

Project.defaultProps = {
    name: "Project Default",
    image: "https://www.topsoft.am/media/1010/how-to-create-a-website-feature-image.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorum non commodi consequatur quia libero sunt eius consequuntur illo, odit veniam. Eum ab saepe ullam ipsa dolore doloremque eaque libero.",
    live: "#",
    code: "#"
}

export default Project
