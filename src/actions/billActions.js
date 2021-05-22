import axios from 'axios'
const token = localStorage.getItem('token')

export const asyncGetAllBills = () => {
    return (dispatch, getState) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const bills = response.data
                if (bills.hasOwnProperty('errors')) {
                    alert(bills.errors)
                } else {
                    console.log(bills)
                    dispatch(setBills(bills))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const setBills = (bills) => {
    return {
        type: 'SET_BILLS',
        payload: bills
    }
}

export const asyncAddBill = (formData) => {
    return (dispatch, getState) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/bills`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const bill = response.data
                if (bill.hasOwnProperty('errors')) {
                    alert(bill.errors)
                } else {
                    console.log(bill)
                    dispatch(addBill(bill))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const addBill = (bill) => {
    return {
        type: 'ADD_BILL',
        payload: bill
    }
}

export const asyncDeleteBill = (id) => {
    return (dispatch, getState) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const bill = response.data
                if (bill.hasOwnProperty('errors')) {
                    alert(bill.errors)
                } else {
                    console.log(bill)
                    dispatch(deleteBill(bill))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const deleteBill = (bill) => {
    return {
        type: 'DELETE_BILL',
        payload: bill
    }
}