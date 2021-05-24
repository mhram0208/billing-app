import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddBill } from '../../actions/billActions'

function BillSummary(props) {
    const { lineItems, total, selectedCustomer } = props
    const dispatch = useDispatch()

    const handleGenerateBill = () => {
        const items = []
        lineItems.forEach(item => {
            items.push({ product: item._id, quantity: item.quantity })
        })

        const billData = {
            date: new Date(),
            customer: selectedCustomer._id,
            lineItems: items
        }
        console.log('formData', billData)
        dispatch(asyncAddBill(billData))
    }

    return (
        <div>
            <h2>Bill Summary</h2>
            {Object.keys(selectedCustomer).length > 0 && lineItems.length > 0 ?
                (
                    <>
                        <p>Customer Name : {selectedCustomer.name}</p>
                        <p>Customer Mobile : {selectedCustomer.mobile}</p>
                        <p>Customer Email : {selectedCustomer.email}</p><hr />
                        <p>Total Products - {lineItems.length}</p>
                        <p>Total Amount - {total} </p>
                        <button onClick={handleGenerateBill}>Generate Bill</button>
                    </>
                )
                : (
                    <h4>Your Cart is Empty</h4>
                )
            }
        </div>
    )
}

export default BillSummary
