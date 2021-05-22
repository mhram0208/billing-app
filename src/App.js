import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { startLogout } from './actions/userActions'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Customers from './components/customers/Customers'
import Profile from './components/Profile'
import Products from './components/products/Products'
import BillsPage from './components/bills/BillsPage'


function App() {
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
    <div className="App">
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
    </div >
  );
}

export default App;
