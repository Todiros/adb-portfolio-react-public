// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const NavContainer = () => {
    return (
        true ? 
            <MobileNav /> : 
            <DesktopNav />
    )
}

export default NavContainer