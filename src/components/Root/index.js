import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes.js' 

const Root = () => {
    return ( 
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
} 

export default Root