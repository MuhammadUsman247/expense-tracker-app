import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(Transaction=> Transaction.amount);

  const income = amounts
                  .filter(item=>item>0)
                  .reduce((acc,item)=>(acc+=item),0)
                  .toFixed(2);

  const expense = amounts
                  .filter(item=>item<0)
                  .reduce((acc,item)=>(acc+=Math.abs(item)),0)
                  .toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+Rs. {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-Rs. {expense}</p>
        </div>
      </div>
    )
}