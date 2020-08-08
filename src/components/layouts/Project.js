import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MoreDetails from './MoreDetails'

class Project extends Component {
    state = {
        moreDetails: false // true - more details window has been toggled on
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({moreDetails: !this.state.moreDetails})
    }

    render() {
        const { project } = this.props

        return (
            <article id={project.Name} className='work-project'>
                <h4 className="project-title">{project.Name}</h4>
                <img src={project.Img} alt="project" className='project-thumbnail'/>
                <ul className="project-links">
                    {project.DemoLink !== 'NA' ?
                        <li className="project-live"><a href={project.DemoLink} target='_blank' rel='noopener noreferrer'>live</a></li>
                        : null
                    }
                    <li className="project-code"><a href={project.CodeLink} target='_blank' rel='noopener noreferrer'>code</a></li>
                    {!project.OriginName ?
                        null 
                        : <li className="project-origin"><a href={project.OriginLink} target='_blank' rel='noopener noreferrer'>{project.OriginName}</a></li>
                    }
                </ul>
                <p className="project-description">{project.Description}</p>
                <button className='click-for-more custom-button' onClick={this.handleClick}>{this.state.moreDetails ? 'less' : 'more'} details</button>
                
                {this.state.moreDetails ? 
                    <MoreDetails details={project.Details}/>
                    : null
                }
            </article>
        )
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}

Project.defaultProps = {
    project: {
        name: "Project Default",
        image: "https://www.topsoft.am/media/1010/how-to-create-a-website-feature-image.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorum non commodi consequatur quia libero sunt eius consequuntur illo, odit veniam. Eum ab saepe ullam ipsa dolore doloremque eaque libero.",
        live: "#",
        code: "#",
        status: "WIP",
        type: "Coursework",
        challenges: ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Rem distinctio sequi incidunt quaerat tempore porro ex dignissimos similique natus excepturi necessitatibus optio fuga", "Aliquam nulla provident maxime dolore"]
    } 
}

export default Project
