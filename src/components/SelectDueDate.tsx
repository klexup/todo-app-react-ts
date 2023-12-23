export default function SelectDueDate({ dueDate, setCurrentTodo }) {
  const handleChange = (value) => {
    setCurrentTodo((prev) => {
      return { ...prev, dueDate: value };
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-H2 font-medium">Select Due Date</h2>
        <input
          type="date"
          name="date"
          id="date-picker"
          className="w-[184px] cursor-pointer rounded-full p-2"
          value={dueDate || ""}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
