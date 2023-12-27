import { useRef, useState } from "react";

interface TagsInputProps {
  tags: string[];
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>;
}

export default function TagsInput({ tags, setCurrentTodo }: TagsInputProps) {
  const [tagsInputFocused, setTagsInputFocused] = useState(false);
  const tagsRef = useRef<HTMLInputElement>(null);
  const handleChange = (value: string) => {
    setCurrentTodo((prev) => {
      return { ...prev, tags: value.split(",") };
    });
  };
  return (
    <>
      <div>
        <h2 className="text-H2 font-medium">Add Tags Seperated By ,</h2>
        <div
          className={`mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full bg-WH ${
            tagsInputFocused ? "border-1 border-BLK" : "border-1 border-STROKE"
          }`}
          onClick={() => {
            if (tagsRef.current) tagsRef.current.focus();
          }}
        >
          <input
            ref={tagsRef}
            type="text"
            name="search"
            id="search"
            className="ml-4 mr-4 w-full cursor-text outline-none"
            placeholder="Career, Job, Fun"
            value={tags || ""}
            onFocus={() => {
              setTagsInputFocused((prev) => !prev);
            }}
            onBlur={() => {
              setTagsInputFocused((prev) => !prev);
            }}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
