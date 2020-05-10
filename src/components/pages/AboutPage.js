import React from 'react'
import { Link } from 'react-router-dom'
import AboutSection from '../layouts/AboutSection'
import SkillList from '../layouts/SkillList'
import CertificatesContainer from '../layouts/CertificatesContainer'
import EducationContainer from '../layouts/EducationContainer'

import CV from '../../res/data/cv'

const certificates = CV.Certificates
const skills = CV.Abilities.Skills

const AboutPage = () => {
    return (
        <div id='about-page-wrapper'>
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
                        {skills}
                    </SkillList>    
                </AboutSection>
                
                <AboutSection sectionId='cv-talents' sectionTitle='Talents'>    
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {skills}
                    </SkillList>
                </AboutSection>

                <AboutSection sectionId='cv-certificates' sectionTitle='Certificates'>
                    <CertificatesContainer certificates={certificates}/>
                </AboutSection>
                
                <AboutSection sectionId='cv-education' sectionTitle='Education'>
                    <EducationContainer />
                </AboutSection>
                
                <AboutSection sectionId='cv-passions' sectionTitle='Passions'>
                    {CV.Passions[3].desc}
                </AboutSection>
                
                <AboutSection sectionId='cv-projects' sectionTitle='Projects'>
                    <Link to={`/work`} id='about-page-work-button' className='page-link'>go to projects</Link>
                </AboutSection>

                
                <div id='button-wrapper'>
                    <button id='download-cv-button' className='custom-button'>Download CV</button>
                </div>
            </div>
        </div> 
    )
}

export default AboutPage;