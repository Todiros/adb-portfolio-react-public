import React from 'react'

import data from '../../res/data/about.json'
import CreditListItem from '../layouts/CreditListItem'

const AboutPage = () => {
    return (
        <div id="about-page-wrapper">
            <section id="about-wrapper">
                <p id="about-intro">
                    This is a personal portfolio webpage showcasing my work for prospective employers and clients. 
                </p>
            </section>
            <section id="credits-wrapper">
                <h2 className="credits-title">CREDITS</h2>
                <p className="credits-information">
                    Giving credits and special thanks to the authors of everything used to create ADB Studios.
                </p>
                <ul id="credits">
                   <CreditListItem type={'ICONS'} items={data.Credits.Icons}/>
                </ul>
            </section>
        </div>
    )
}

export default AboutPage
