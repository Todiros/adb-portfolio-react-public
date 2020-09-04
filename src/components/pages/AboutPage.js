import React from 'react'

import data from '../../res/data/about.json'
import CreditListContainer from '../layouts/CreditListContainer'

const AboutPage = () => {
    return (
        <div id="about-page-wrapper">
            <section id="about-wrapper">
                <p id="about-intro">
                    {data.Intro} 
                </p>
            </section>
            <section id="credits-wrapper">
                <h2 className="credits-title">CREDITS</h2>
                <p className="credits-information">
                    {data.Credits.Description}
                </p>
                <ul className="credits">
                    {
                        data.Credits.Types.map(type =>
                            // returns component only if the credit type has any credits inside
                            type.Items.length ? 
                                <CreditListContainer type={type.TypeName} items={type.Items}/> : 
                                null
                        )
                    }
                </ul>
            </section>
        </div>
    )
}

export default AboutPage
