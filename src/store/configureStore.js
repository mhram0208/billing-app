import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import billsReducer from '../reducers/billsReducer'
import customerReducer from '../reducers/customerReducer'
import productReducer from '../reducers/productReducer'
import userReducer from '../reducers/userReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        customers: customerReducer,
        user: userReducer,
        products: productReducer,
        bills: billsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore