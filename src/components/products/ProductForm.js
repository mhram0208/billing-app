import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddProduct, asyncUpdateProduct } from '../../actions/productActions'

function ProductForm(props) {
    const { _id, name: prodName, price: prodPrice, resetUpdateProduct } = props

    const dispatch = useDispatch()

    const [name, setName] = useState(prodName ? prodName : '')
    const [price, setPrice] = useState(prodPrice ? prodPrice : '')

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'name') {
            setName(e.target.value)
        } else if (attr === 'price') {
            setPrice(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name[0].toUpperCase() + name.substr(1),
            price: price
        }
        //if validation passes
        if (_id) {
            dispatch(asyncUpdateProduct(_id, formData, resetUpdateProduct))
        } else {
            dispatch(asyncAddProduct(formData))
        }
        //reset form
        setName('')
        setPrice('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleChange} /><br />
                <label>Price</label>
                <input type="text" name="price" value={price} onChange={handleChange} /><br />
                {_id ? (
                    <>
                        <button type="submit">Update</button>
                        <button onClick={resetUpdateProduct}>Cancel</button>
                    </>
                ) : (
                    <button type="submit">Submit</button>
                )}

            </form>
        </div>
    )
}

export default ProductForm
