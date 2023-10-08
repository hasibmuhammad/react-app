import categories from "../categories";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, "Product name should be at least 3 characters")
    .max(50, { message: "Product name should be maximum 50 characters" }),
  price: z
    .number({ invalid_type_error: "Price is required" })
    .min(0.01, { message: "Price must be at least 0.01" })
    .max(100_000, { message: "Price must be maximum 100_000" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ProductFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ProductFormData) => void;
}

const ProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({ resolver: zodResolver(schema) });

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-4">
        <label htmlFor="name">Product Name</label> <br />
        <input
          {...register("name")}
          id="name"
          className="w-full p-4 outline-none border-2 border-yellow-400 rounded-lg"
          type="text"
          placeholder="Enter Product Name"
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="price">Price</label> <br />
        <input
          {...register("price", { valueAsNumber: true })}
          className="w-full p-4 outline-none border-2 border-yellow-400 rounded-lg"
          id="price"
          type="number"
          placeholder="Product Price"
        />
        {errors.price && <p className="text-red-400">{errors.price.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="price">Category</label>
        <select
          {...register("category")}
          id="category"
          className="w-full p-4 outline-none border-2 border-yellow-400 rounded-lg"
        >
          <option value="">All Categories</option>
          {categories.map((ct) => (
            <option key={ct} value={ct}>
              {ct}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-400">{errors.category.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full btn btn-warning text-white font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
