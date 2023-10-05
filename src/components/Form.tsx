import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const person = { name: "", email: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (emailRef.current !== null) {
      person.email = emailRef.current.value;
    }

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
          ref={nameRef}
          id="name"
          type="text"
          placeholder="Enter your name"
          className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
        />
      </div>
      <div className="w-full mb-3">
        <label htmlFor="email">Email: </label>
        <input
          ref={emailRef}
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
