import { IAction } from '../interfaces/interfaces';

const appReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: any) => transaction.id !== action.payload
        )
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

export default appReducer;
