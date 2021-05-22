import axios from 'axios'
const token = localStorage.getItem('token')

export const asyncAddCustomer = (formData) => {
    return (dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/customers`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const customer = response.data
                if (customer.hasOwnProperty('errors')) {
                    alert(customer.errors)
                } else {
                    console.log(customer)
                    dispatch(addCustomer(customer))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const addCustomer = (customer) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: customer
    }
}

export const asyncUpdateCustomer = (id, formData, reset) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const customer = response.data
                if (customer.hasOwnProperty('errors')) {
                    alert(customer.errors)
                } else {
                    console.log(customer)
                    dispatch(updateCustomer(customer))
                    reset()
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const updateCustomer = (customer) => {
    return {
        type: 'UPDATE_CUSTOMER',
        payload: customer
    }
}

export const asyncGetAllCustomers = (formData) => {
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/customers`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const customers = response.data
                if (customers.hasOwnProperty('errors')) {
                    alert(customers.errors)
                } else {
                    dispatch(setAllCustomers(customers))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const setAllCustomers = (customers) => {
    return {
        type: 'SET_CUSTOMERS',
        payload: customers
    }
}

export const asyncDeleteCustomer = (id) => {
    console.log('id', id)
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const customer = response.data
                if (customer.hasOwnProperty('errors')) {
                    alert(customer.errors)
                } else {
                    console.log('customer1', customer)
                    dispatch(deleteCustomer(customer._id))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const deleteCustomer = (id) => {
    return {
        type: 'DELETE_CUSTOMER',
        payload: id
    }
}