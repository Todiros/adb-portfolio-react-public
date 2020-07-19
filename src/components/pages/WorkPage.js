import React from 'react'
import Project from '../layouts/Project'

import CV from '../../res/data/cv'

const ProjectsData = CV.Projects

const WorkPage = () => {
    return (
        <div id="work-page-wrapper">
            {ProjectsData.map(project =>
                <Project project={project} key={project.Id}/>
            )}
        </div>
    )
}

export default WorkPage

