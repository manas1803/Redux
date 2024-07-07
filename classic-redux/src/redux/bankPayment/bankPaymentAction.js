import { actionCreator } from "../../common/actionCreator";
import { BANK_PAYMENT_ACTION_TYPES } from "./bankPaymentActionTypes";

export const addAmount = (amount)=>actionCreator(BANK_PAYMENT_ACTION_TYPES.ADD_AMOUNT,amount)

export const takeLoan = (amount)=>actionCreator(BANK_PAYMENT_ACTION_TYPES.TAKE_LOAN,amount)

export const removeAmount= (amount)=>actionCreator(BANK_PAYMENT_ACTION_TYPES.REMOVE_AMOUNT,amount)