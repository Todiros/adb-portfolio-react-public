/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import WorkPage from '../pages/WorkPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage';

const pageName = (name) => {
    return <h3 className='page-name'>// {name}</h3>
}

const home = () => {
    return pageName('HOME')
}
const about = () => {
    return pageName('ABOUT')
}
const work = () => {
    return pageName('WORK')
}
const contact = () => {
    return pageName('CONTACT')
}
const error = () => {
    return pageName('404')
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