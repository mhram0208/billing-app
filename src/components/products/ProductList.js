import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDeleteProduct, asyncGetAllProducts } from '../../actions/productActions'

function ProductList(props) {
    const { handleUpdateProduct } = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetAllProducts())
    }, [])

    const products = useSelector(state => state.products)

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure?')
        if (confirmDelete) {
            dispatch(asyncDeleteProduct(id))
        }
    }

    return (
        <div>
            <h2>Existing Products</h2>
            {products.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={() => {
                                        handleDelete(product._id)
                                    }}>Delete</button></td>
                                    <td><button onClick={() => {
                                        handleUpdateProduct(product)
                                    }}>Edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <h4>No Products found</h4>
            )}
        </div>
    )
}

export default ProductList
