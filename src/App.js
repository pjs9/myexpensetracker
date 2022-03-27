import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='tracker'>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
