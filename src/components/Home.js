import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import Footer from './Footer'

export default function Home({music,setUser}) {
    const [Page, setPage] = useState('home')    
        return (
            <div>
                <Navbar setUser={setUser} setPage={setPage} />
                {
                    Page === 'home' ? <Dashboard music={music} /> :
                    Page === 'profile' ? <Profile /> :
                    Page === 'aboutus' ? <Aboutus /> :
                    <h1>404</h1>
                }
                <Footer />
            </div>
        )

    }