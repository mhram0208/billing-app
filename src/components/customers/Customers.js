import React, { useState } from 'react'
import { addCustomer } from '../../actions/customerActions'
import CustomersList from './CustomersList'
import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer'

function Customers() {
    const [editCustomer, setEditCustomer] = useState({})

    const handleEditCustomer = (data) => {
        setEditCustomer(data)
    }

    const resetEditCustomer = () => {
        setEditCustomer({})
    }

    return (
        <div>
            {Object.keys(editCustomer).length > 0 ? (
                <EditCustomer editCustomer={editCustomer} resetEditCustomer={resetEditCustomer} />
            ) : (
                <AddCustomer />
            )}

            <CustomersList handleEditCustomer={handleEditCustomer} />
        </div>
    )
}

export default Customers
