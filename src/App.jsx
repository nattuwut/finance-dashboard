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
        <div className="transaction">
          <h3>Salary</h3>
          <h3>Income</h3>
          <p>35,000</p>
        </div>
        <div className="transaction">
          <h3>Shopping</h3>
          <h3>Expense</h3>
          <p>3,500</p>
        </div>
        <div className="transaction">
          <h3>Food</h3>
          <h3>Expense</h3>
          <p>1,500</p>
        </div>
      </div>
    </div>

  );
}

export default App;