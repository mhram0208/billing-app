import React, { useState } from 'react'

function ProductSelection(props) {
    const { products, handleAddLineItem } = props
    const [selectedProductId, setSelectedProductId] = useState('')

    const handleChange = (e) => {
        setSelectedProductId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddLineItem({ _id: selectedProductId, quantity: 1 })
        setSelectedProductId('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="product" value={selectedProductId} onChange={handleChange}>
                    <option value="">Select Product</option>
                    {products.map((product) => {
                        return (
                            <option value={product._id} key={product._id}>{product.name} - {product.price}</option>
                        )
                    })}
                </select>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default ProductSelection
