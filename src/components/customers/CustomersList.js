import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetAllCustomers, asyncDeleteCustomer } from '../../actions/customerActions'

function CustomersList(props) {
    const { handleEditCustomer } = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllCustomers())
    }, [])

    const customers = useSelector(state => state.customers)

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure?')
        if (confirmDelete) {
            dispatch(asyncDeleteCustomer(id))
        }
    }

    

    return (
        <div>
            <h2>Existing Customers</h2>
            {customers.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, i) => {
                            return (
                                <tr key={i}>
                                    <td>{customer.name}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.email}</td>
                                    <td><button onClick={() => {
                                        handleDelete(customer._id)
                                    }}>Delete</button></td>
                                    <td><button onClick={() => {
                                        handleEditCustomer(customer)
                                    }}>Edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <h4>No customers found</h4>
            )}

        </div >
    )
}

export default CustomersList
