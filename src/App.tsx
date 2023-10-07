import { useState } from "react";
import ExpenseList from "./epense-tracker/ExpenseList";
import ExpenseCategories from "./epense-tracker/ExpenseFilter";
import ExpenseForm from "./epense-tracker/ExpenseForm";

const App = () => {
  const [selectedCategory, setselectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", price: 20, category: "Utilities" },
    { id: 2, description: "Apple", price: 30, category: "Groceries" },
    { id: 3, description: "Laptop", price: 20, category: "Utilities" },
    { id: 4, description: "Mobile", price: 100, category: "Electronics" },
    { id: 5, description: "Mobile", price: 100, category: "Electronics" },
  ]);

  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { id: expenses.length + 1, ...expense }])
        }
      />
      <ExpenseCategories
        onSelectCategory={(category) => setselectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) => setExpenses(expenses.filter((e) => id !== e.id))}
      />
    </>
  );
};

export default App;
