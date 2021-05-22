import axios from 'axios'
const token = localStorage.getItem('token')

export const asyncAddProduct = (formData) => {
    return (dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/products`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const product = response.data
                if (product.hasOwnProperty('errors')) {
                    alert(product.errors)
                } else {
                    console.log(product)
                    dispatch(addProduct(product))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const asyncUpdateProduct = (id, formData, reset) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const product = response.data
                if (product.hasOwnProperty('errors')) {
                    alert(product.errors)
                } else {
                    console.log(product)
                    dispatch(updateProduct(product))
                    reset()
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const updateProduct = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product
    }
}

export const asyncGetAllProducts = () => {
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/products`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const products = response.data
                if (products.hasOwnProperty('errors')) {
                    alert(products.errors)
                } else {
                    dispatch(setAllProducts(products))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const setAllProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    }
}

export const asyncDeleteProduct = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const product = response.data
                if (product.hasOwnProperty('errors')) {
                    alert(product.errors)
                } else {
                    dispatch(deleteProduct(product._id))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}