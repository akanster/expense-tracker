import React, { useState, useContext, FormEvent } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ITransaction } from '../interfaces/interfaces';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTransaction: ITransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: amount ?? 0
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  // const verifyAmount = (input: string) => {
  //   const attemptedParse = parseInt(input);

  //   if (!Object.is(NaN, attemptedParse)) {
  //     setAmount(attemptedParse);
  //   }
  // };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
