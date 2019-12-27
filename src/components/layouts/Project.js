import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MoreDetails from './MoreDetails'

class Project extends Component {
    state = {
        moreDetails: false 
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({moreDetails: !this.state.moreDetails})
    }

    render() {
        return (
            <article className='work-project'>
                <h4 id="project-title">{this.props.name}</h4>
                <img src={this.props.image} alt="project" className='project-thumbnail'/>
                <ul id="project-links">
                    <li className="project-live"><a href={this.props.live} target='_blank' rel='noopener noreferrer'>live</a></li>
                    <li className="project-code"><a href={this.props.code} target='_blank' rel='noopener noreferrer'>code</a></li>
                </ul>
                <p className="project-description">{this.props.description}</p>
                <button id="click-for-more" className='custom-button' onClick={this.handleClick}>more details</button>
                <div id="more-details-wrapper">
                    {this.state.moreDetails ? 
                        <MoreDetails details={this.props}/>
                        : null
                    }
                </div>
            </article>
        )
    }
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
