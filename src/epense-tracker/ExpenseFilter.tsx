import { useState } from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseCategories = ({ onSelectCategory }: Props) => {
  return (
    <div className="max-w-5xl mx-auto mt-4 mb-4 text-center">
      <select
        name=""
        id=""
        className="w-4/5 border-2 border-orange-400 h-12 rounded-lg px-4"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Groceries">Grocereis</option>
        <option value="Utilities">Utilities</option>
        <option value="Electronics"> Electronics</option>
      </select>
    </div>
  );
};

export default ExpenseCategories;
