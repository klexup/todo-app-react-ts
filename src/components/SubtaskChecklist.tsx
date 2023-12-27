import SubtaskDetailsPage from "./SubtaskDetailsPage";

export default function SubtaskChecklist(props: any) {
  return (
    <>
      <div className="mb-5 flex flex-col gap-3">
        {props.subTasks.map((value: SubTask, index: number) => {
          return (
            <div key={value.subtaskId}>
              <SubtaskDetailsPage
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
