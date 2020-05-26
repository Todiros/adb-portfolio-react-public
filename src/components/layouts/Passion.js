import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
                    <button className="passion-desc-button" title='See Passion Description' onClick={this.handleClick}>
                        <img src="#" alt="" className="passion-desc-icon"/>
                    </button>
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
