import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import YearFilter from "./YearFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filterYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="expenses">
        <YearFilter
          selected={selectedYear}
          onChangeFilter={filterYearHandler}
        />
        {filteredItems.length === 0 && <p>No Expenses Found.</p>}{" "}
        {filteredItems.length > 0 &&
          filteredItems.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
