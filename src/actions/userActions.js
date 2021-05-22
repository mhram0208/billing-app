import axios from 'axios'

export const startRegister = (formData) => {
    console.log(formData)
    return (dispatch, getState) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    window.location.href = "/login"
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startLogin = (formData) => {
    return (dispatch, getState) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login', formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    console.log(result)
                    alert(result.errors)
                } else {
                    localStorage.setItem('token', result.token)
                    window.location.href = "/"
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startLogout = (toggleLogged) => {
    return () => {
        alert('Successfully Logged out')
        localStorage.removeItem('token')
        toggleLogged()
        window.location.href = "/"
    }
}

export const asynGetProfileDetails = () => {
    return (dispatch, getState) => {
        const token = localStorage.getItem('token')
        axios.get(`http://dct-billing-app.herokuapp.com/api/users/account`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                const user = response.data
                if (user.hasOwnProperty('errors')) {
                    alert(user.errors)
                } else {
                    dispatch(setUser(user))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}