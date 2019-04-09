import React from 'react'
import _404 from '../../res/404_2.svg'

const ErrorPage = () => {
    return (
        <div id="error-page-wrapper">
            <p>Page Not Found!</p>
            <img 
                src={_404} 
                alt='error 404 page'
                className='error-img'>
            </img>
        </div>
    )
}

export default ErrorPage;