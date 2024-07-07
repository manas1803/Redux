import { combineReducers } from "redux";
import { bankPaymentReducer } from "./bankPaymentRedux/bankPaymentReducer";

const rootReducer = combineReducers({
    bankPayment:bankPaymentReducer
})

export default rootReducer;