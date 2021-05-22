import React from 'react'
import CustomerForm from '../customers/CustomerForm'

function EditCustomer(props) {
    const { editCustomer, resetEditCustomer } = props

    return (
        <div>
            <h1>Edit Customer</h1>
            <CustomerForm {...editCustomer} resetEditCustomer={resetEditCustomer} />
        </div>
    )
}

export default EditCustomer
