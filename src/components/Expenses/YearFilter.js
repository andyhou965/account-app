import React from "react";
import "./YearFilter.css";

const YearFilter = (props) => {
  return (
    <div className="year-filter">
      <div className="year-filter__control">
        <label>Filter by year</label>
        <select value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
