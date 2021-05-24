import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/userActions'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import Customers from '../customers/Customers'
import Products from '../products/Products'
import BillsPage from '../bills/BillsPage'

function NavigationBar(props) {
    const dispatch = useDispatch()
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const toggleLogged = () => {
        setUserLoggedIn(!userLoggedIn)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            toggleLogged()
        }
    }, [])

    const handleLogout = () => {
        dispatch(startLogout(toggleLogged))
    }
    return (
        <div>
            <h1>Billing App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                {userLoggedIn ? (
                    <>
                        <li><Link to="/customers">Customers</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/bills">Bills</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={handleLogout} to="/">Logout</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )
                }
            </ul >

            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/customers" exact component={Customers} />
            <Route path="/products" exact component={Products} />
            <Route path="/bills" exact component={BillsPage} />
            <Route path="/profile" exact component={Profile} />
        </div>
    )
}

export default NavigationBar
