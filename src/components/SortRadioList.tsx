import React, { useState } from "react";

export default function SortRadioList({ setSortOption, sortOption }) {
  const [sortValue, setSortValue] = useState("default");

  return (
    <div
      className="flex flex-col gap-2 p-3 text-RADIOTEXT"
      onClick={(e) => e.stopPropagation()}
    >
      <RadioListItem
        label="Default"
        value="default"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <RadioListItem
        label="Ascending Date"
        value="ascending-date"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <RadioListItem
        label="Descending Date"
        value="descending-date"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <RadioListItem
        label="Ascending Complexity"
        value="ascending-complexity"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <RadioListItem
        label="Descending Complexity"
        value="descending-complexity"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <RadioListItem
        label="Ascending Priority"
        value="ascending-priority"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <RadioListItem
        label="Descending Priority"
        value="descending-priority"
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
    </div>
  );
}

function RadioListItem({ label, value, sortOption, setSortOption }) {
  const handleChange = () => {
    setSortOption(value);
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
        checked={sortOption === value}
        onChange={handleChange}
      />
    </div>
  );
}
