import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50, { message: "Description should be maximum of 50 characters" }),
  price: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, { message: "Minimum amount is: 0.01" })
    .max(100_000, { message: "Maximum amount is: 100_000" }),
  category: z.enum(["Groceries", "Utilities", "Electronics"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="max-w-5xl mx-auto flex flex-col justify-center items-center px-10 mt-4"
      action=""
    >
      <div className="w-full mb-3">
        <label htmlFor="name">Description: </label>
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
        <label htmlFor="price">price: </label>
        <input
          {...register("price", { valueAsNumber: true })}
          id="price"
          type="number"
          placeholder="Enter your price"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        />
        {errors.price && <p className="text-red-400">{errors.price.message}</p>}
      </div>
      <div className="w-full mb-3">
        <label htmlFor="email">Category: </label>
        <select
          {...register("category")}
          id="category"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        >
          <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Electronics">Electronics</option>
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
  );
};

export default ExpenseForm;
