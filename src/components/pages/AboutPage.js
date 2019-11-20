import React from 'react'
import AboutSection from '../layouts/AboutSection'

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

const AboutPage = () => {
    return (
        <div id='about-page-wrapper'>
            <section id='story-wrapper'>
                <p id='my-story'>
                    <LoremIpsumIntro />
                </p>
            </section>
            <div id='cv-wrapper'>

                <AboutSection sectionId='cv-education' sectionTitle='Education'>
                </AboutSection>
                <AboutSection sectionId='cv-projects' sectionTitle='Projects'>
                </AboutSection>
                <AboutSection sectionId='cv-certificates' sectionTitle='Certificates'>
                </AboutSection>
                <AboutSection sectionId='cv-skills' sectionTitle='Skills, Traits & Talents'>
                    <LoremIpsumCV />
                </AboutSection>
                <AboutSection sectionId='cv-passions' sectionTitle='Passions'>
                </AboutSection>
                
                <div id='button-wrapper'>
                    <button id='download-cv-button' className='custom-button'>Download CV</button>
                </div>
            </div>
        </div> 
    )
}

export default AboutPage;