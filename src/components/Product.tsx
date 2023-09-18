interface Props {
  id: number;
  name: string;
  price: number;
  addToCart: (id: number) => void;
}
const Product = ({ id, name, price, addToCart }: Props) => {
  return (
    <div className="border-2 rounded p-8 my-4">
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => addToCart(id)} className="px-4 py-2 bg-orange-400">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
