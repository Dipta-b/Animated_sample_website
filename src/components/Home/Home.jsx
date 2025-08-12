import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Home