import React from "react";
import SubtaskDetailsPage from "./SubtaskDetailsPage";

export default function SubtaskChecklist({
  subTasks,
  currentTodo,
  setCurrentTodo,
}) {
  return (
    <>
      <div className="mb-5 flex flex-col gap-3">
        {subTasks.map((value, index) => {
          return (
            <div key={value.subtaskId}>
              <SubtaskDetailsPage
                index={index}
                setCurrentTodo={setCurrentTodo}
                subTasks={subTasks}
                currentTodo={currentTodo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
