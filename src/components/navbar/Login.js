import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/userActions'

function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'email') {
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //if validation passes
        const formData = {
            email: email,
            password: password,
        }
        console.log('formData', formData)
        dispatch(startLogin(formData))

    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" onChange={handleChange} /><br />
                <label>Password</label>
                <input type="text" name="password" onChange={handleChange} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
