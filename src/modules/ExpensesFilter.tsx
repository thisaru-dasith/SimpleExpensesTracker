import { ChangeEvent } from "react";

interface Props {
  onHandleClick: (event: ChangeEvent<HTMLSelectElement>) => void;
}
function ExpensesFilter({ onHandleClick }: Props) {
  return (
    <>
      <div className="mb-3">
        <select
          id="filter"
          className="form-select"
          aria-label="Default select example"
          onChange={onHandleClick}
        >
          <option value=""> </option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertaitment">Entertaitment</option>
        </select>
      </div>
    </>
  );
}
export default ExpensesFilter;
