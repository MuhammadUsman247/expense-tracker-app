import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({trans}) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = trans.amount>0 ? '+' : '-';

    return (
        <li className={trans.amount>0 ? 'plus' : 'minus'} >
            {trans.text} <span>{sign}Rs. {Math.abs(trans.amount)}</span><button onClick={()=>deleteTransaction(trans.id)} className="delete-btn">x</button>
        </li>
    )
}
