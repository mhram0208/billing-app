import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startRegister } from '../../actions/userActions'

function Register() {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [address, setAddress] = useState('')

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'username') {
            setUsername(e.target.value)
        } else if (attr === 'email') {
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        } else if (attr === 'businessName') {
            setBusinessName(e.target.value)
        } else if (attr === 'address') {
            setAddress(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //if validation passes
        const formData = {
            username: username,
            email: email,
            password: password,
            businessName: businessName,
            address: address
        }
        console.log('formData', formData)
        dispatch(startRegister(formData))

    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Username *</label>
                <input type="text" name="username" value={username} id="username" onChange={handleChange} /><br />
                <label>Email *</label>
                <input type="email" name="email" value={email} onChange={handleChange} /><br />
                <label>Password *</label>
                <input type="text" name="password" value={password} onChange={handleChange} /><br />
                <label>Business Name</label>
                <input type="text" name="businessName" value={businessName} onChange={handleChange} /><br />
                <label>Address</label>
                <textarea name="address" value={address} onChange={handleChange}></textarea><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
