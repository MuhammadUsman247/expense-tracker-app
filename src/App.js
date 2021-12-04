import { Header } from './componemts/Header';
import { Balance } from './componemts/Balance';
import { IncomeExpense } from './componemts/IncomeExpense';
import { TransactionList } from './componemts/TransactionList';
import { AddTransaction } from './componemts/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
        <div className = "container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
