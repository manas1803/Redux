import { combineReducers } from 'redux'
import bankPaymentReducer from './bankPayment/bankPaymentReducer'

export const rootReducer = combineReducers({
    bankPayment:bankPaymentReducer
})