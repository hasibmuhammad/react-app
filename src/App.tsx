import { useState } from "react";
import ProductList from "./product-tracker/components/ProductList";
import ProductFilter from "./product-tracker/components/ProductFilter";
import ProductForm from "./product-tracker/components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Mobile", price: 900, category: "Accessories" },
    { id: 2, name: "Chocolate", price: 900, category: "Groceries" },
    { id: 3, name: "Jersy", price: 100, category: "Sports" },
    { id: 4, name: "T-shirt", price: 50, category: "Lifestyle" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  if (products.length === 0) return null;

  const filteredProducts = selectedCategory
    ? products.filter((pd) => pd.category === selectedCategory)
    : products;

  return (
    <div className="max-w-full mx-auto px-10 mt-4 flex flex-col md:flex-row md:justify-around">
      <div className="my-8 md:w-1/2">
        <h2 className="font-bold text-lg text-slate-900">Add Product:</h2>
        <ProductForm
          onSubmit={(data) =>
            setProducts([...products, { id: products.length + 1, ...data }])
          }
        />
      </div>
      <div className="md:w-2/5">
        <div className="mt-14">
          <h2 className="font-bold text-lg text-slate-900">Filter:</h2>
          <ProductFilter
            onChange={(category) => setSelectedCategory(category)}
          />
        </div>
        <div>
          <ProductList
            products={filteredProducts}
            onDelete={(id) =>
              setProducts(products.filter((pd) => pd.id !== id))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
