const initialState = []

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return [...state, { ...action.payload }]
        }
        case 'UPDATE_PRODUCT': {
            return state.map((prod) => {
                if (prod._id === action.payload._id) {
                    return action.payload
                } else {
                    return prod
                }
            })
        }
        case 'SET_PRODUCTS': {
            return [...action.payload]
        }
        case 'DELETE_PRODUCT': {
            return state.filter(product => product._id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default productReducer