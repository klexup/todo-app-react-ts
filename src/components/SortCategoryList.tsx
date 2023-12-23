import React from "react";

export default function SortCategoryList({
  allCurrentTags,
  setTagFilter,
  tagFilter,
}) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-2 p-3 text-RADIOTEXT"
        onClick={(e) => e.stopPropagation()}
      >
        {allCurrentTags.length < 1 ? (
          <div>No Categories Found</div>
        ) : (
          allCurrentTags.map((value, index) => {
            return (
              <CategoryListItem
                key={index}
                label={value}
                value={value}
                setTagFilter={setTagFilter}
                tagFilter={tagFilter}
              />
            );
          })
        )}
      </div>
    </>
  );
}

function CategoryListItem({ label, value, tagFilter, setTagFilter }) {
  const handleChange = () => {
    if (tagFilter === value) {
      setTagFilter(null);
      return;
    }
    setTagFilter(value);
  };

  return (
    <div
      className="flex w-full justify-between border-b-1 border-STROKE p-1"
      onClick={handleChange}
    >
      {label}
      <input
        type="radio"
        name="sortTags"
        value={value}
        checked={tagFilter === value}
        onChange={handleChange}
      />
    </div>
  );
}
