import React from 'react'
import { Link } from 'react-router-dom'
import AboutSection from '../layouts/AboutSection'
import SkillList from '../layouts/SkillList'
import CertificatesContainer from '../layouts/CertificatesContainer'
import EducationContainer from '../layouts/EducationContainer'
import PassionsContainer from '../layouts/PassionsContainer'

import CV from '../../res/data/cv'

const certificates = CV.Certificates
const education = CV.Education
const skills = CV.Abilities.Skills
const traits = CV.Abilities.Traits
const talents = CV.Abilities.Talents
const passions = CV.Passions

const CVPage = () => {
    return (
        <div id='cv-page-wrapper'>
            <section id='story-wrapper'>
                <p id='my-story'>
                    {CV.Intro}
                </p>
            </section>
            <div id='cv-wrapper'>
                
                <AboutSection sectionId='cv-skills' sectionTitle='Skills'>    
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {skills}
                    </SkillList>
                </AboutSection>
                
                <AboutSection sectionId='cv-traits' sectionTitle='Traits'>
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {traits}
                    </SkillList>    
                </AboutSection>
                
                <AboutSection sectionId='cv-talents' sectionTitle='Talents'>    
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {talents}
                    </SkillList>
                </AboutSection>

                <AboutSection sectionId='cv-education' sectionTitle='Education'>
                    <EducationContainer education={education}/>
                </AboutSection>
                
                <AboutSection sectionId='cv-certificates' sectionTitle='Certificates'>
                    <CertificatesContainer certificates={certificates}/>
                </AboutSection>
                
                <AboutSection sectionId='cv-projects' sectionTitle=''>
                    <Link to={`/work`} id='about-page-work-button' className='page-link'>go to projects</Link>
                </AboutSection>
                
                <AboutSection sectionId='cv-passions' sectionTitle='Passions'>
                    <PassionsContainer passions={passions} />
                </AboutSection>
                
                <div id='button-wrapper'>
                    <button id='download-cv-button' className='custom-button'>Download CV</button>
                </div>
            </div>
        </div> 
    )
}

export default CVPage;