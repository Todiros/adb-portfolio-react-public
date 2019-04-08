/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import WorkPage from '../pages/WorkPage'
import ContactPage from '../pages/ContactPage'

const home = () => {
    return <p className='page-name'>// HOME</p>
}
const about = () => {
    return <p className='page-name'>// ABOUT</p>
}
const work = () => {
    return <p className='page-name'>// WORK</p>
}
const contact = () => {
    return <p className='page-name'>// CONTACT</p>
}

const routes = [
    {
        path: '/',
        exact: true,
        pageName: home,
        content: HomePage
    },
    {
        path: '/about',
        pageName: about,
        content: AboutPage 
    },
    {
        path: '/work',
        pageName: work,
        content: WorkPage 
    },
    {
        path: '/contact',
        pageName: contact,
        content: ContactPage 
    },
]

export default routes