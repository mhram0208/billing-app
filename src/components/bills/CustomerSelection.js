import React from 'react'

function CustomerSelection(props) {
    const { customers, setCustomer } = props
    const handleChange = (e) => {
        const selectedCustomer_id = e.target.value
        const selectedCustomer = customers.find(cust => cust._id === selectedCustomer_id)
        setCustomer(selectedCustomer)
    }
    return (
        <div>
            <select name="customer" onChange={handleChange}>
                <option value="">Select Cutomer</option>
                {customers.map((customer) => {
                    return (
                        <option value={customer._id} key={customer._id}>{customer.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CustomerSelection
