import { useState } from "react";

interface Props {
  filteredValue: string;
}

function ExpensesTable({ filteredValue }: Props) {
  const [expenses, setExpenses] = useState([
    { description: "milk", amount: 5, category: "Groceries" },
    { description: "Eggs", amount: 10, category: "Groceries" },
    { description: "Electracity", amount: 100, category: "Utitities" },
    { description: "Movies", amount: 40, category: "Entertaitment" },
  ]);

  const filteredExpenses =
    filteredValue !== ""
      ? expenses.filter((ele) => ele.category === filteredValue)
      : expenses;

  return (
    <>
      {expenses.length !== 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((ele, index) => (
              <tr key={index}>
                <td>{ele.description}</td>
                <td>{`$${ele.amount}.00`}</td>
                <td>{ele.category}</td>
                <td>
                  <button
                    value={index}
                    className="btn btn-danger"
                    onClick={() => {
                      setExpenses(
                        expenses.filter((expense) => expense !== ele)
                      );
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Totals</td>
              <td>
                {expenses
                  .map((ele) => ele.amount)
                  .reduce(
                    (accumulator, currentValue) => accumulator + currentValue
                  )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default ExpensesTable;
