import { useEffect, useRef } from "react";

const SideEffect = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Hello";
  });

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  return (
    <div className="px-10">
      <label htmlFor="name">Name: </label>
      <input
        ref={ref}
        id="name"
        type="text"
        placeholder="Enter your name"
        className="px-6 py-4 border-2 border-orange-400 outline-none rounded-lg w-full"
      />
    </div>
  );
};

export default SideEffect;
