import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetAllCustomers } from '../../actions/customerActions'
import { asyncGetAllProducts } from '../../actions/productActions'
import { asyncAddBill } from '../../actions/billActions'

function AddBill(props) {
    const [productId, setProductId] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [quantity, setQuantity] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllCustomers())
        dispatch(asyncGetAllProducts())
    }, [])

    const customers = useSelector(state => state.customers)
    const products = useSelector(state => state.products)

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'product') {
            setProductId(e.target.value)
        } else if (attr === 'customer') {
            setCustomerId(e.target.value)
        } else if (attr === 'quantity') {
            setQuantity(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            date: new Date(),
            customer: customerId,
            lineItems: [
                { product: productId, quantity: quantity }
            ]
        }
        dispatch(asyncAddBill(formData))
    }

    return (
        <div>
            {customers.length > 0 && products.length > 0 ? (
                <>
                    <h2>Add Bill</h2>
                    <form onSubmit={handleSubmit}>
                        <select name="customer" value={customerId} onChange={handleChange}>
                            <option value="">Select Cutomer</option>
                            {customers.map((customer) => {
                                return (
                                    <option value={customer._id} key={customer._id}>{customer.name}</option>
                                )
                            })}
                        </select>
                        <select name="product" value={productId} onChange={handleChange}>
                            <option value="">Select Product</option>
                            {products.map((product) => {
                                return (
                                    <option value={product._id} key={product._id}>{product.name}</option>
                                )
                            })}
                        </select>
                        <input type="number" name="quantity" value={quantity} onChange={handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </>
            ) : (
                <h2>Please add atleast one Customer and Product before generating bill</h2>
            )
            }
        </div>
    )
}

export default AddBill
