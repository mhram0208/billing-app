const initialState = []

const billsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BILLS': {
            return [...action.payload]
        }
        case 'ADD_BILL': {
            return [...state, action.payload]
        }
        case 'DELETE_BILL': {
            return state.filter(bill => bill._id !== action.payload._id)
        }
        default: {
            return state
        }
    }
}

export default billsReducer