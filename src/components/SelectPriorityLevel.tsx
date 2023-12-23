export default function SelectPriorityLevel({ priorityLevel, setCurrentTodo }) {
  const prioItemProps = { priorityLevel, setCurrentTodo };
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h2 className="text-H2 font-medium">Select Priority Level</h2>
      <div className="flex justify-between pb-1 pt-1">
        {values.map((value, index) => {
          return (
            <PriorityLevelItem
              priorityValue={value}
              {...prioItemProps}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

function PriorityLevelItem({ priorityValue, priorityLevel, setCurrentTodo }) {
  const handleClick = () => {
    if (priorityValue === priorityLevel) {
      setCurrentTodo((prev) => {
        return { ...prev, priorityLevel: 0 };
      });
    } else {
      setCurrentTodo((prev) => {
        return { ...prev, priorityLevel: priorityValue };
      });
    }
  };
  return (
    <>
      <div
        className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 ${
          priorityValue === priorityLevel ? "bg-PRIMARY" : "bg-BLUE10PERCENT"
        } p-1 text-RADIONUMBER`}
        onClick={() => handleClick()}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      >
        {priorityValue}
      </div>
    </>
  );
}
