export default function SelectTime({ dueTime, setCurrentTodo }) {
  const handleChange = (value) => {
    setCurrentTodo((prev) => {
      return { ...prev, dueTime: value };
    });
  };
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-H2 font-medium">Select Time</h2>
        <input
          type="time"
          name="time"
          id="time-picker"
          className="w-[184px] cursor-pointer rounded-full p-2"
          value={dueTime || ""}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
