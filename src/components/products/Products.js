import React, { useState } from 'react'
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

function Products(props) {
    const [updateProduct, setUpdateProduct] = useState({})

    const handleUpdateProduct = (product) => {
        setUpdateProduct(product)
    }

    const resetUpdateProduct = () => {
        setUpdateProduct({})
    }


    return (
        <div>
            {Object.keys(updateProduct).length > 0 ? (
                <EditProduct updateProduct={updateProduct} resetUpdateProduct={resetUpdateProduct} />
            ) : (
                <AddProduct />
            )
            }
            <ProductList handleUpdateProduct={handleUpdateProduct} />
        </div>
    )
}

export default Products
