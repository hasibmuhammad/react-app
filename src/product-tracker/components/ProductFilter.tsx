import categories from "../categories";

interface Props {
  onChange: (category: string) => void;
}

const ProductFilter = ({ onChange }: Props) => {
  return (
    <select
      id="category"
      className="w-full p-4 outline-none border-2 border-yellow-400 rounded-lg"
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((ct) => (
        <option key={ct} value={ct}>
          {ct}
        </option>
      ))}
    </select>
  );
};

export default ProductFilter;
