import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // Use the "useEffect" hook if you are making an HTTP request in a component.
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (
            // Render a new Transaction component and pass in a prop so it knows which Transaction to render.
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
    </>
  )
}
