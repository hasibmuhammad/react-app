import ProductList from "./components/ProductList";
import { useState } from "react";
import Users from "./components/Users";

const App = () => {
  const [category, setCategoy] = useState("");

  return (
    <div className="min-h-screen max-w-md mx-auto flex justify-center flex-col items-center">
      {/* <ProductList category={category} />
      <select
        name=""
        id=""
        className="w-1/2 border border-orange-400 p-3"
        onChange={(event) => setCategoy(event.target.value)}
      >
        <option value="Clothing">Clothing</option>
        <option value="Housing">Housing</option>
      </select> */}
      <Users />
    </div>
  );
};

export default App;
