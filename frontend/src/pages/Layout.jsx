import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div>
        {/* Header */}
            <Header/>

        {/* Body */}
            <div className="flex mx-auto px-5 md:px-20">
                <div className="mt-5 mb-5 min-h-[500px] w-full">
                    <Outlet></Outlet>
                </div>
            </div>

        {/* Footer */}
            <Footer/>
    </div>
  )
}

export default Layout
