import React, { useRef, useState } from "react";

export default function TaskInput({ taskName, setCurrentTodo }) {
  const [taskNameInputFocused, setTaskNameInputFocused] = useState(false);
  const taskNameRef = useRef();
  const handleChange = (value) => {
    setCurrentTodo((prev) => {
      return { ...prev, taskName: value };
    });
  };

  return (
    <>
      <h2 className="text-H2 font-medium">Task Name</h2>
      <div
        className={`mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full bg-WH ${
          taskNameInputFocused
            ? "border-1 border-BLK"
            : "border-1 border-STROKE"
        }`}
        onClick={() => {
          taskNameRef.current.focus();
        }}
      >
        <input
          ref={taskNameRef}
          type="text"
          name="search"
          id="search"
          className="ml-4 mr-4 w-full cursor-text outline-none"
          placeholder="Name of task..."
          value={taskName || ""}
          onFocus={() => {
            setTaskNameInputFocused((prev) => !prev);
          }}
          onBlur={() => {
            setTaskNameInputFocused((prev) => !prev);
          }}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
    </>
  );
}
