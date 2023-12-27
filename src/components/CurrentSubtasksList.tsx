import SubtaskNewTodoPage from "./SubtaskNewTodoPage";

export default function CurrentSubtasksList(props: any) {
  return (
    <>
      <div className="mb-5 flex flex-col gap-3">
        {props.subTasks.map((value: SubTask, index: number) => {
          return (
            <div key={value.subtaskId}>
              <SubtaskNewTodoPage
                index={index}
                setCurrentTodo={props.setCurrentTodo}
                subTasks={props.subTasks}
                currentTodo={props.currentTodo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
