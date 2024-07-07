import { actionCreator } from "../../common/actionCreator";
import { BANK_PAYMENT_TYPES } from "./bankPaymentActionTypes";

export const addAmount = (amount)=>actionCreator(BANK_PAYMENT_TYPES.ADD_AMOUNT,amount)

export const withdrawAmount = (amount)=>actionCreator(BANK_PAYMENT_TYPES.WITHDRAW_AMOUNT,amount)