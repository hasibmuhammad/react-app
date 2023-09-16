import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleclick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  console.log(pizza);

  return (
    <>
      <button
        className="bg-orange-500 text-white py-2 px-4 rounded "
        onClick={() => handleclick()}
      >
        Click Me
      </button>
    </>
  );
};

export default App;
