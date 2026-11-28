import './App.css';

const transactions = [
  { id: 1, name: "Salary", type: "Income", amount: 35000 },
  { id: 2, name: "Shopping", type: "Expense", amount: 3500 },
  { id: 3, name: "Food", type: "Expense", amount: 1500 }
];

function App() {
  return (
    <div className="dashboard">
      <h1>Finance Dashboard</h1>
      <p>Welcome back!</p>

      <div className="summary-cards">

        <div className="card">
          <h2>Total Balance</h2>
          <p>25,000</p>
        </div>

        <div className="card">
          <h2>Income</h2>
          <p>35,000</p>
        </div>

        <div className="card">
          <h2>Expenses</h2>
          <p>10,000</p>
        </div>

      </div>
      <div className="transactions">
        <h2>Recent Transactions</h2>
        {transactions.map((transaction) => (
          <div className="transaction" key={transaction.id}>
            <div>
              <h3>{transaction.name}</h3>
              <p>{transaction.type}</p>
            </div>
            <p>{transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;