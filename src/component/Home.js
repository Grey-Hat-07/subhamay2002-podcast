import React, { useState } from 'react'
import { Navbar } from './Navbar'
import Aboutus from './Aboutus'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Footer from './Footer'

export default function Home(props) {
    const [Page, setPage] = useState('home')
    if(Page === 'home') {
    return (
        <div>
            <Navbar setstatus={props.setstatus} setPage={setPage}/>
            <Dashboard />
            <Footer />
        </div>
    )
}   else if(Page === 'profile') {
    return (
        <div>
            <Navbar setstatus={props.setstatus} setPage={setPage}/>
            <Profile />
            <Footer />
        </div>
    )
}   else if(Page === 'aboutus') {
    return (
        <div>
            <Navbar setstatus={props.setstatus} setPage={setPage}/>
            <Aboutus />
            <Footer />
        </div>
    )

}}
