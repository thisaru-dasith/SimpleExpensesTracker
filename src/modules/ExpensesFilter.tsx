function ExpensesFilter() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          aria-label="Default select example"
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
