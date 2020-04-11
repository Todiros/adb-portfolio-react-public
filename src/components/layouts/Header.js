import React from 'react'
import Nav from './Nav'
import PageName from './PageName'
import _MyLogoCropped from '../../res/adb.svg'
import _MyLogoFull from '../../res/adbstudios.svg'

const Header = () => {
    return (
        <header id="header">
            <span className='header-background'></span>
            <img 
                src={_MyLogoCropped} 
                alt='ADB Studios'
                id='logo' 
                className='logo-mobile'
            />

            <img 
                src={_MyLogoFull} 
                alt='ADB Studios' 
                id='logo'
                className='logo-full'
            />

            <PageName position={'header'}/>
            <Nav position={'header'}/>
        </header>
    )
}

export default Header