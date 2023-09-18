import { useState } from "react";
import Product from "./components/Product";

const App = () => {
  const products = [
    { id: 1, name: "Product-1", price: 10 },
    { id: 2, name: "Product-2", price: 20 },
    { id: 3, name: "Product-3", price: 30 },
    { id: 4, name: "Product-4", price: 40 },
  ];
  const [cart, setCart] = useState([]);
  const handleAddToCart = (id: number, name: string, price: number) => {
    setCart([...cart, { id, name, price }]);
  };

  console.log(cart);

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            id={product.id}
            price={product.price}
            addToCart={() =>
              handleAddToCart(product.id, product.name, product.price)
            }
          />
        ))}
      </div>
      {/* <button
        className="bg-orange-500 text-white py-2 px-4 rounded "
        onClick={() => handleclick()}
      >
        Click Me
      </button> */}
    </>
  );
};

export default App;
