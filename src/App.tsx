import "./App.css";
import ExpenseTracker from "./modules/ExpenseTracker";
import ExpensesFilter from "./modules/ExpensesFilter";
import ExpensesTable from "./modules/ExpensesTable";

function App() {
  return (
    <>
      {/* //<ExpenseTracker></ExpenseTracker> */}
      <ExpensesFilter></ExpensesFilter>
      <ExpensesTable></ExpensesTable>
    </>
  );
}

export default App;
