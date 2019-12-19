import React from 'react'
import Project from '../layouts/Project'

const projectArr = [1, 2, 3, 4, 5, 6, 7]

const WorkPage = () => {
    return (
        <div id="work-page-wrapper">
            {projectArr.map(i =>
                <Project name={'Project ' + i}/>
            )}
        </div>
    )
}

export default WorkPage

