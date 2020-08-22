/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import HomePage from '../pages/HomePage'
import WorkPage from '../pages/WorkPage'
import ContactPage from '../pages/ContactPage'
import CVPage from '../pages/CVPage'
import ErrorPage from '../pages/ErrorPage';

const pageName = (name) => {
    return <h3 className='page-name'>// {name}</h3>
}

const home = () => {
    return pageName('HOME')
}
const work = () => {
    return pageName('WORK')
}
const contact = () => {
    return pageName('CONTACT')
}
const cv = () => {
    return pageName('CV')
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
        path: '/cv',
        pageName: cv,
        content: CVPage 
    },
    {
        pageName: error,
        content: ErrorPage
    }
]

export default routes