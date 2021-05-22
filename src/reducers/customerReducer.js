const initialState = []

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER': {
            return [...state, { ...action.payload }]
        }
        case 'UPDATE_CUSTOMER': {
            return state.map((ele) => {
                if (ele._id === action.payload._id) {
                    return action.payload
                } else {
                    return ele
                }
            })
        }
        case 'SET_CUSTOMERS': {
            return [...action.payload]
        }
        case 'DELETE_CUSTOMER': {
            return state.filter(customer => customer._id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default customerReducer