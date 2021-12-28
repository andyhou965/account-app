import React, { useState } from "react";
import "./NewExpense.css";
import DataForm from "./DataForm";

const NewExpense = () => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const endEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <DataForm onCancel={endEditingHandler} />}
    </div>
  );
};

export default NewExpense;
