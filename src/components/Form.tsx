import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: "", email: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(person);
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="max-w-md mx-auto min-h-screen flex flex-col justify-center items-center px-10"
    >
      <div className="w-full mb-3">
        <label htmlFor="name">Name: </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          value={person.name}
          id="name"
          type="text"
          placeholder="Enter your name"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        />
      </div>
      <div className="w-full mb-3">
        <label htmlFor="email">Email: </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, email: event.target.value })
          }
          value={person.email}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        />
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
