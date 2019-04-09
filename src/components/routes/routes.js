/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import WorkPage from '../pages/WorkPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage';

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
const error = () => {
    return <p className='page-name'>// 404</p>
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
    {
        pageName: error,
        content: ErrorPage
    }
]

export default routes