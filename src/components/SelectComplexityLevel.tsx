interface SelectComplexityLevelProps {
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>;
  complexityLevel: number;
}

export default function SelectComplexityLevel({
  complexityLevel,
  setCurrentTodo,
}: SelectComplexityLevelProps) {
  const complexityItemProps = { complexityLevel, setCurrentTodo };
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h2 className="text-H2 font-medium">Select Complexity Level</h2>
      <div className="flex justify-between pb-1 pt-1">
        {values.map((value, index) => {
          return (
            <ComplexityLevelItem
              complexityValue={value}
              {...complexityItemProps}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

interface ComplexityLevelItemProps {
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>;
  complexityValue: number;
  complexityLevel: number;
}

function ComplexityLevelItem({
  complexityValue,
  complexityLevel,
  setCurrentTodo,
}: ComplexityLevelItemProps) {
  const handleClick = () => {
    if (complexityLevel === complexityValue) {
      setCurrentTodo((prev) => {
        return { ...prev, complexityLevel: 0 };
      });
    } else {
      setCurrentTodo((prev) => {
        return { ...prev, complexityLevel: complexityValue };
      });
    }
  };
  return (
    <>
      <div
        className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 ${
          complexityValue === complexityLevel
            ? "bg-PRIMARY"
            : "bg-BLUE10PERCENT"
        } p-1 text-RADIONUMBER`}
        onClick={() => handleClick()}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      >
        {complexityValue}
      </div>
    </>
  );
}
