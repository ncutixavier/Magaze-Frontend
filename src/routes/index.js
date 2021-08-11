import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Home from '../components/Home'
import Login from '../components/Login'
import '../assets/scss/Home.scss'

const index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route default component={NotFound} />
            </Switch>
        </Router>
    )
}

export default index


