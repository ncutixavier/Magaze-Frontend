import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Users from '../pages/Users'
import Products from '../pages/Products'
import Shops from '../pages/Shops'
import HomePage from '../pages/HomePage'
import Dashboard from '../components/Dashboard'
import ForgotPassword from '../pages/ForgotPassword'
import ProtectRoute from '../components/ProtectRoute'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import '../assets/scss/Home.scss'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#084298'
        },
        error: {
            main: '#f44336'
        }
    }
})

const index = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgotpassword" component={ForgotPassword} />

                    <Dashboard>
                        <Switch>
                            <ProtectRoute path="/Home" component={HomePage} />
                            <ProtectRoute path="/users" component={Users} />
                            <ProtectRoute path="/shops" component={Shops} />
                            <ProtectRoute path="/products" component={Products} />
                        </Switch>
                    </Dashboard>
                    <Route default component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default index


