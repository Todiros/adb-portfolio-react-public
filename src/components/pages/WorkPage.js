import React from 'react'
import Project from '../layouts/Project'

import CV from '../../res/data/cv'

const ProjectsData = CV.Projects

const WorkPage = () => {
    return (
        <div id="work-page-wrapper">
            {ProjectsData
                .sort((a, b) => a.Id > b.Id ? 1 : -1)
                .map(project =>
                    <Project project={project} key={project.Id}/>
            )}
        </div>
    )
}

export default WorkPage