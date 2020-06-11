import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonImage from '../layouts/ButtonImage'

class Passion extends Component {
    state = {
        passionDescriptionOn: false
    }

    handleClick = () => {
        this.setState({passionDescriptionOn: !this.state.passionDescriptionOn})
    }

    render() {
        const { passion } = this.props
        
        return (
            <article className='passion-wrapper'>
                <section className="passion-header">
                    <img src={passion.Img} alt="" className="passion-icon"/>
                    <h3 className="passion-name">{passion.Name}</h3>
                    <ButtonImage handleClick={this.handleClick}/>
                </section>
                
                {!this.state.passionDescriptionOn ? null :
                    <section className="passion-description">
                        {passion.Desc}
                    </section>
                }
            </article>
        )
    }
}

Passion.propTypes = {
    passion: PropTypes.object.isRequired
}

export default Passion
