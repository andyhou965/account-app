import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseTitle title={props.title} />
      <ExpenseAmount amount={props.amount} />
    </Card>
  );
};

export default ExpenseItem;
