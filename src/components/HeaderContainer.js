// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'


const HeaderContainer = () => {
    return (
        true ? 
            <MobileHeader /> : 
            <DesktopHeader />
    )
}

export default HeaderContainer