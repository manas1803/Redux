import { BANK_PAYMENT_ACTION_TYPES } from "./bankPaymentActionTypes";

const initialState = {
  amount: 0,
  loanAmount: 0,
};

const bankPaymentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BANK_PAYMENT_ACTION_TYPES.ADD_AMOUNT: {
      return {
        amount: payload,
      };
    }
    case BANK_PAYMENT_ACTION_TYPES.TAKE_LOAN: {
      return {
        loanAmount: payload,
      };
    }
    case BANK_PAYMENT_ACTION_TYPES.REMOVE_AMOUNT: {
      return {
        amount: state.amount - payload,
      };
    }
    default:
      return {
        state,
      };
  }
};

export default bankPaymentReducer;
