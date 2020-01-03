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
            <article id={this.props.name} className='work-project'>
                <h4 className="project-title">{this.props.name}</h4>
                <img src={this.props.image} alt="project" className='project-thumbnail'/>
                <ul className="project-links">
                    <li className="project-live"><a href={this.props.live} target='_blank' rel='noopener noreferrer'>live</a></li>
                    <li className="project-code"><a href={this.props.code} target='_blank' rel='noopener noreferrer'>code</a></li>
                </ul>
                <p className="project-description">{this.props.description}</p>
                <button className='click-for-more custom-button' onClick={this.handleClick}>{this.state.moreDetails ? 'less' : 'more'} details</button>
                
                {this.state.moreDetails ? 
                    <MoreDetails details={this.props}/>
                    : null
                }
            </article>
        )
    }
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    live: PropTypes.string,
    code: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    challenges: PropTypes.array
}

Project.defaultProps = {
    name: "Project Default",
    image: "https://www.topsoft.am/media/1010/how-to-create-a-website-feature-image.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorum non commodi consequatur quia libero sunt eius consequuntur illo, odit veniam. Eum ab saepe ullam ipsa dolore doloremque eaque libero.",
    live: "#",
    code: "#",
    status: "WIP",
    type: "Coursework",
    challenges: ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Rem distinctio sequi incidunt quaerat tempore porro ex dignissimos similique natus excepturi necessitatibus optio fuga", "Aliquam nulla provident maxime dolore"]
}

export default Project
