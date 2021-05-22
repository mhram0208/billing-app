import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynGetProfileDetails } from '../actions/userActions'

function Profile() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asynGetProfileDetails())
    }, [])

    const user = useSelector(state => state.user)

    return (
        <div>
            <h2>Profile</h2>
            <h4>Admin Name - {user.username}</h4>
            <h4>Email - {user.email}</h4>
            <h4>Business Name - {user.businessName}</h4>
            <h4>Address - {user.address}</h4>
        </div>
    )
}

export default Profile
