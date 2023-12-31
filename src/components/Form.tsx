import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "You must provide a valid email" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="max-w-md mx-auto min-h-screen flex flex-col justify-center items-center px-10"
    >
      <div className="w-full mb-3">
        <label htmlFor="name">Name: </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Enter your name"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
      </div>
      <div className="w-full mb-3">
        <label htmlFor="email">Email: </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}
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

export default Form;
