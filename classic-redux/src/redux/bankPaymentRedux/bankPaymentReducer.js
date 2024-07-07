import { BANK_PAYMENT_TYPES } from "./bankPaymentActionTypes";

const INITIAL_STATE = {
  amount: 0,
};

export const bankPaymentReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case BANK_PAYMENT_TYPES.ADD_AMOUNT: {
      return {
        amount: state.amount + payload,
      };
    }
    case BANK_PAYMENT_TYPES.WITHDRAW_AMOUNT: {
      return {
        amount: state.amount - payload,
      };
    }
    default: {
      return state;
    }
  }
};
