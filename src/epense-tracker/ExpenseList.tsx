interface Expense {
  id: number;
  description: string;
  price: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div className="max-w-5xl mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.description}</td>
              <td>${e.price}</td>
              <td>{e.category}</td>
              <td>
                <button
                  onClick={() => onDelete(e.id)}
                  className="btn btn-error text-white"
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
            <td className="text-green-400 font-bold">Total</td>
            <td>${expenses.reduce((acc, e) => e.price + acc, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ExpenseList;
