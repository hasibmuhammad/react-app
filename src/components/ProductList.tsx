import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  //   After render
  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["clothing", "housing"]);
  }, [category]);
  return <div className="mb-4">Product List</div>;
};

export default ProductList;
