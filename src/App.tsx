import { ChangeEvent, useState } from "react";
import "./App.css";
import ExpenseTracker from "./modules/ExpenseTracker";
import ExpensesFilter from "./modules/ExpensesFilter";
import ExpensesTable from "./modules/ExpensesTable";

function App() {
  const [filteredValue, setFilteredValue] = useState("");
  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilteredValue(event.target.value);
  };

  return (
    <>
      {/* //<ExpenseTracker></ExpenseTracker> */}
      <ExpensesFilter onHandleClick={handleFilter}></ExpensesFilter>
      <ExpensesTable filteredValue={filteredValue}></ExpensesTable>
    </>
  );
}

export default App;
