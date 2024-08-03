import { FormEvent } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description shoud be at least 3 charactors" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

function ExpenseTracker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            {...register("description")}
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
          >
            <option value=""> </option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertaitment">Entertaitment</option>
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseTracker;
