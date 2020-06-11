import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ButtonImage extends Component {
    state = {
        isToggled: false
    }

    handleClick = () => {
        this.props.handleClick()
        this.setState({isToggled: !this.state.isToggled})
    }

    render() {
        const imgClass = !this.state.isToggled ? 'passion-desc-icon' : 'passion-desc-icon toggled'

        return (
            <button className="passion-desc-button" title='See Passion Description' onClick={this.handleClick}>
                <img src="https://img.icons8.com/metro/52/000000/expand-arrow.png" alt="" className={imgClass}/>
            </button>
        )
    }
}

ButtonImage.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default ButtonImage

