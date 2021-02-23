import React, { createContext, useReducer } from 'react';
import { IProps, IState, ITransaction } from '../interfaces/interfaces';
import AppReducer from './AppReducer';

/* Initial State */
const initialState = {
  transactions: [] as Array<ITransaction>
};

/* Create context. */
export const GlobalContext = createContext(initialState as IState);

/* Provider component. */
export const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction: ITransaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
