import React from "react";
import "./ExpenseTitle.css";

const ExpenseTitle = (props) => {
  const title = props.title;
  return (
    <div className="expense-title">
      <h2>{title}</h2>
    </div>
  );
};

export default ExpenseTitle;
