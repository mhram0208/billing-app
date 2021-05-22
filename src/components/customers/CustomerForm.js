import React, { useState } from 'react'
import { asyncAddCustomer, asyncUpdateCustomer } from '../../actions/customerActions'
import { useDispatch } from 'react-redux'

function CustomerForm(props) {
    const { _id, name: custName, mobile: custMobile, email: custEmail, resetEditCustomer } = props
    const dispatch = useDispatch()
    const [name, setName] = useState(custName ? custName : '')
    const [mobile, setMobile] = useState(custMobile ? custMobile : '')
    const [email, setEmail] = useState(custEmail ? custEmail : '')

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'name') {
            setName(e.target.value)
        } else if (attr === 'mobile') {
            setMobile(e.target.value)
        } else if (attr === 'email') {
            setEmail(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            mobile: mobile,
            email: email
        }
        //if validation passes
        console.log(formData)
        if (_id) {
            //update action
            dispatch(asyncUpdateCustomer(_id, formData, resetEditCustomer))
        } else {
            //add action
            dispatch(asyncAddCustomer(formData))
            //reset form
            setName('')
            setMobile('')
            setEmail('')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleChange} /><br />
                <label>Mobile</label>
                <input type="number" name="mobile" value={mobile} onChange={handleChange} /><br />
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} /><br />
                {_id ? (
                    <>
                        <button type="submit">Update</button>
                        <button onClick={resetEditCustomer}>Cancel</button>
                    </>
                ) : (
                    <button type="submit">Submit</button>
                )
                }

            </form>
        </div>
    )
}

export default CustomerForm
