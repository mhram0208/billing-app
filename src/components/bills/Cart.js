import React from 'react'

function cart(props) {
    const { lineItems, products, handleChangeQuantity, deleteCartItem } = props

    const getSubTotal = (id, quantity) => {
        const productPrice = getProductPrice(id)
        return productPrice * quantity
    }

    const getProductName = (id) => {
        if (products.length > 0) {
            const product = products.find(prod => prod._id === id)
            return product.name
        }
    }

    const getProductPrice = (id) => {
        if (products.length > 0) {
            const product = products.find(prod => prod._id === id)
            return product.price
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {lineItems.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{getProductName(item._id)}</td>
                                <td>{getProductPrice(item._id)}</td>
                                <td>
                                    <button onClick={() => {
                                        handleChangeQuantity(item)
                                    }} disabled={item.quantity === 1 ? true : false}>-</button>
                                    {item.quantity}
                                    <button onClick={() => {
                                        handleChangeQuantity(item, 'increment')
                                    }}>+</button>
                                </td>
                                <td>{getSubTotal(item._id, item.quantity)}</td>
                                <td><button onClick={() => {
                                    deleteCartItem(item._id)
                                }}> Delete </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default cart
