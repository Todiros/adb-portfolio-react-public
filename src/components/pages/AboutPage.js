import React from 'react'
import AboutSection from '../layouts/AboutSection'
import SkillList from '../layouts/SkillList'
import { Link } from 'react-router-dom'

const LoremIpsumIntro = () => <React.Fragment>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis pretium urna, vel tincidunt ante. 
    Cras porttitor sit amet leo sed gravida. Fusce aliquet, justo ac fringilla maximus, augue lorem pharetra lectus, 
    eget tincidunt nisl nunc dignissim odio. Nunc sem turpis, mattis nec risus vel, iaculis vestibulum dui. 
    Ut eros nisl, venenatis id faucibus ut, facilisis ut dolor. Praesent pretium justo eget eros tempor eleifend. 
    Nullam vestibulum lectus sit amet nibh laoreet varius. Vestibulum posuere lorem in luctus viverra. 
    Integer lacinia, tortor id congue pellentesque, augue nisl tincidunt urna, eu accumsan arcu nunc eget enim. 
    Aliquam porta lacus nec porttitor eleifend.

    Donec non nulla sed elit aliquet lacinia vel vel dui. Proin eu nisi tortor. Maecenas cursus mauris erat. 
    Nullam dui velit, tempor at neque quis, hendrerit congue urna. Sed ac vulputate ante. 
    Etiam sit amet enim sed leo ultricies sodales. Etiam rutrum arcu purus, at volutpat ligula bibendum non.
</React.Fragment>
const LoremIpsumCV = () => <React.Fragment>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lectus nec justo suscipit auctor. Fusce mollis sapien eget quam sodales, id pharetra magna suscipit. Nulla facilisi. Integer nec nulla mi. Nam placerat nisi venenatis, consequat mauris et, ornare libero. Suspendisse potenti. Morbi turpis elit, aliquet consequat odio nec, scelerisque.
</React.Fragment>
const DummySkillsArray = () => [
"Skill000", "Skill001", "Skill002", "Skill003", "Skill004", 
"Skill005", "Skill006", "Skill007", "Skill008", "Skill009", 
"Skill010", "Skill011", "Skill012", "Skill013", "Skill014"
]
const DummyTraitsArray = () => [
    "Trait000", "Trait001", "Trait002", "Trait003", 
    "Trait004", "Trait005", "Trait006", "Trait007", 
    "Trait008", "Trait009", "Trait010", "Trait011", 
    "Trait012"
]
const DummyTalentsArray = () => [
    "Talent000", "Talent001", "Talent002", "Talent003", 
    "Talent004", "Talent005", "Talent006", "Talent007", 
    "Talent008", "Talent009", "Talent010", "Talent011", 
    "Talent012", "Talent013", "Talent014", "Talent015", 
    "Talent016", "Talent017", "Talent018", "Talent019"
]

const AboutPage = () => {
    return (
        <div id='about-page-wrapper'>
            <section id='story-wrapper'>
                <p id='my-story'>
                    <LoremIpsumIntro />
                </p>
            </section>
            <div id='cv-wrapper'>
                <AboutSection sectionId='cv-skills' sectionTitle='Skills'>    
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {DummySkillsArray()}
                    </SkillList>
                </AboutSection>

                <AboutSection sectionId='cv-traits' sectionTitle='Traits'>
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {DummyTraitsArray()}
                    </SkillList>    
                </AboutSection>
                
                <AboutSection sectionId='cv-talents' sectionTitle='Talents'>    
                    <SkillList listId='skill-wrapper' listItemClass='skill-item'>
                        {DummyTalentsArray()}
                    </SkillList>
                </AboutSection>

                <AboutSection sectionId='cv-certificates' sectionTitle='Certificates'>
                </AboutSection>
                
                <AboutSection sectionId='cv-education' sectionTitle='Education'>
                </AboutSection>
                
                <AboutSection sectionId='cv-passions' sectionTitle='Passions'>
                    <LoremIpsumCV />
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