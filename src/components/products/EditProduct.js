import React from 'react'
import ProductForm from './ProductForm'

function EditProduct(props) {
    const { updateProduct, resetUpdateProduct } = props
    return (
        <div>
            <h2>Edit Product</h2>
            <ProductForm {...updateProduct} resetUpdateProduct={resetUpdateProduct}/>
        </div>
    )
}

export default EditProduct

