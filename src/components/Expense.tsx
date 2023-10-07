import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema or shape for zod validation of form
const schema = z.object({
  description: z.string().min(3, { message: "Must be at least 3 characters!" }),
  amount: z
    .number({ invalid_type_error: "Please provide a number" })
    .min(5, { message: "Amount must be at least $5" }),
  category: z.string().min(1, { message: "You must select a category" }),
});

type FormData = z.infer<typeof schema>;

const Expense = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState<FieldValues>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(products);
  };
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col justify-center items-center px-10"
      >
        <div className="w-full mb-3">
          <label htmlFor="description">Description: </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            placeholder="Enter your description"
            className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
          />
          {errors.description && (
            <p className="text-red-400">{errors.description.message}</p>
          )}
        </div>
        <div className="w-full mb-3">
          <label htmlFor="amount">Amount: </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            placeholder="Enter amount"
            className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
          />

          {errors.amount && (
            <p className="text-red-400">{errors.amount.message}</p>
          )}
        </div>
        <div className="w-full mb-3">
          <label htmlFor="category">Category: </label>
          <select
            {...register("category")}
            id="category"
            className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="electronics">Electronics</option>
          </select>

          {errors.category && (
            <p className="text-red-400">{errors.category.message}</p>
          )}
        </div>

        <button
          className="px-5 py-3 bg-orange-400 text-white font-bold rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Expense;
