import React, { useState } from "react";

export default function SortRadioList({ setFilter, filter }) {
  const [sortValue, setSortValue] = useState("default");

  return (
    <div
      className="flex flex-col gap-2 p-3 text-RADIOTEXT"
      onClick={(e) => e.stopPropagation()}
    >
      <RadioListItem
        label="Default"
        value="default"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioListItem
        label="Ascending Date"
        value="ascending-date"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioListItem
        label="Descending Date"
        value="descending-date"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioListItem
        label="Ascending Complexity"
        value="ascending-complexity"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioListItem
        label="Descending Complexity"
        value="descending-complexity"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioListItem
        label="Ascending Priority"
        value="ascending-priority"
        filter={filter}
        setFilter={setFilter}
      />
      <RadioListItem
        label="Descending Priority"
        value="descending-priority"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

function RadioListItem({ label, value, filter, setFilter }) {
  const handleChange = () => {
    setFilter(value);
  };

  return (
    <div
      className="flex justify-between border-b-1 border-STROKE p-1"
      onClick={handleChange}
    >
      {label}
      <input
        type="radio"
        name="sortFilter"
        value={value}
        checked={filter === value}
        onChange={handleChange}
      />
    </div>
  );
}
