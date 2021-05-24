import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetAllCustomers } from '../../actions/customerActions'
import { asyncGetAllProducts } from '../../actions/productActions'
import CustomerSelection from './CustomerSelection'
import ProductSelection from './ProductSelection'
import BillSummary from './BillSummary'
import Cart from './Cart'

function AddBill(props) {
    const [selectedCustomer, setSelectedCustomer] = useState({})
    const [lineItems, setLineItems] = useState([])
    const [total, setTotal] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllCustomers())
        dispatch(asyncGetAllProducts())
    }, [])

    const customers = useSelector(state => state.customers)
    const products = useSelector(state => state.products)

    const setCustomer = (cust) => {
        setSelectedCustomer(cust)
    }


    const handleAddLineItem = (data) => {
        const result = [...lineItems, data]
        setLineItems(result)
    }

    const handleChangeQuantity = (item, type) => {
        if (type === 'increment') {
            const newItemPlus = { ...item, quantity: item.quantity + 1 }
            const result = lineItems.map((ele) => {
                if (ele._id === newItemPlus._id) {
                    return newItemPlus
                } else {
                    return ele
                }
            })
            setLineItems(result)
        } else {
            const newItemMinus = { ...item, quantity: item.quantity - 1 }
            const result = lineItems.map((ele) => {
                if (ele._id === newItemMinus._id) {
                    return newItemMinus
                } else {
                    return ele
                }
            })
            setLineItems(result)
        }

    }

    const deleteCartItem = (id) => {
        const result = lineItems.filter(item => item._id !== id)
        setLineItems(result)
    }

    useEffect(() => {
        calculateTotal(lineItems)
    }, [lineItems])

    const calculateTotal = (lineItems) => {
        let total = 0
        lineItems.forEach((item) => {
            products.forEach((prod) => {
                if (item._id === prod._id) {
                    total = total + (prod.price * item.quantity)
                    setTotal(total)
                }
            })

        })
    }

    return (
        <div>
            {customers.length > 0 && products.length > 0 ? (
                <>
                    <h2>Add Bill</h2>
                    <CustomerSelection customers={customers} setCustomer={setCustomer} />
                    <ProductSelection products={products} handleAddLineItem={handleAddLineItem} />
                    <Cart lineItems={lineItems} products={products} handleChangeQuantity={handleChangeQuantity} deleteCartItem={deleteCartItem} />
                    <BillSummary selectedCustomer={selectedCustomer} lineItems={lineItems} total={total} />
                </>
            ) : (
                <h2>Please add atleast one Customer and Product before generating bill</h2>
            )
            }
        </div>
    )
}

export default AddBill
