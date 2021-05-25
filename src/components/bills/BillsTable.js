import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDeleteBill } from '../../actions/billActions'
import { asyncGetAllCustomers } from '../../actions/customerActions'
import moment from 'moment'

function BillsTable(props) {
    const { bills } = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllCustomers())
    }, [])

    const customers = useSelector(state => state.customers)

    const getCustomerName = (id) => {
        if (customers.length > 0) {
            const getCustomer = customers.find(cust => cust._id === id)
            return getCustomer.name
        }
    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure?')
        if (confirmDelete) {
            dispatch(asyncDeleteBill(id))
        }
    }

    return (
        <div>
            <h2>All Bills</h2>
            <table>
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Date and Time</th>
                        <th>View / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill, i) => {
                        return (
                            <tr key={bill._id}>
                                <td>{i + 1}</td>
                                <td>{bill._id}</td>
                                <td>{getCustomerName(bill.customer)}</td>
                                <td>{moment(bill.createdAt).format('DD/MM/YYYY, hh:mm A')}</td>
                                <td><button onClick={() => {
                                    handleDelete(bill._id)
                                }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BillsTable
