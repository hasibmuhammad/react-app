interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductList = ({ products, onDelete }: Props) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((pd) => (
              <tr key={pd.id}>
                <th>{pd.id}</th>
                <td>{pd.name}</td>
                <td>${pd.price}</td>
                <td>{pd.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(pd.id)}
                    className="btn btn-warning font-bold text-white w-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td className="font-bold text-warning text-lg">Total</td>
              <td>${products.reduce((acc, pd) => acc + pd.price, 0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
