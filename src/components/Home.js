import React from 'react'
import { Navbar } from './Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
export default function Home({music,setUser}) {  
        return (
            <Router>
                <Navbar setUser={setUser} />
                <Switch>
                    <Route path="/" exact>
                        <Dashboard music={music} setUser={setUser} />
                    </Route>
                    <Route path="/profile">
                        <Profile setUser={setUser} />
                    </Route>
                    <Route path="/aboutus">
                        <Aboutus />
                    </Route>
                </Switch>
                <Footer />
            </Router>

        )

    }