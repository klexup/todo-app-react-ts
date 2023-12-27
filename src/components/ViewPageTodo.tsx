import ProgressRing from "./ProgressRing";

export default function ViewPageTodo(props: any) {
  const {
    taskName,
    priorityLevel,
    complexityLevel,
    dueDate,
    dueTime,
    subTasks,
    completed,
  } = props.value;

  const getPriorityColor = () => {
    if (priorityLevel <= 3) {
      return "bg-PRIMARY";
    } else if (priorityLevel <= 7) {
      return "bg-ORANGE";
    } else {
      return "bg-STYLE";
    }
  };
  const getDueDateColor = () => {
    if (priorityLevel <= 3) {
      return "text-PRIMARY";
    } else if (priorityLevel <= 7) {
      return "text-ORANGE";
    } else {
      return "text-STYLE";
    }
  };

  const getPriorityLevel = () => {
    if (priorityLevel <= 3) {
      return "Low " + priorityLevel + "/10";
    } else if (priorityLevel <= 7) {
      return "Medium " + priorityLevel + "/10";
    } else {
      return "High " + priorityLevel + "/10";
    }
  };

  const getComplexityLevel = () => {
    if (complexityLevel <= 3) {
      return "Low " + complexityLevel + "/10";
    } else if (complexityLevel <= 7) {
      return "Medium " + complexityLevel + "/10";
    } else {
      return "High " + complexityLevel + "/10";
    }
  };

  const calculatePercentageComplete = () => {
    const totalSubtasks = subTasks.length;
    let subtasksComplete = 0;
    subTasks.forEach((value: SubTask) => {
      if (value.subtaskCompleted) {
        subtasksComplete += 1;
      }
    });
    return Math.floor((subtasksComplete / totalSubtasks) * 100);
  };

  const percentageComplete = calculatePercentageComplete();

  const formattedDueDate = () => {
    let str = "";
    if (dueDate) {
      str += dueDate;
    }
    if (dueTime && !dueDate) {
      str += dueTime;
      return str;
    }
    if (dueTime) {
      str += ", " + dueTime;
    }
    if (!dueTime && !dueDate) {
      str = "None";
      return str;
    }
    return str;
  };

  return (
    <div
      className={`relative mb-2 mt-2 flex w-[398px] flex-col gap-4 rounded-2xl ${
        completed ? "bg-green-200" : "bg-WH"
      } p-2 `}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <div
            className={`h-[18px] w-[18px] rounded-full ${getPriorityColor()}`}
          ></div>
          <div className="ml-2 text-xl font-medium">{taskName}</div>
        </div>
        <div className="flex gap-2"></div>
      </div>
      <div className="flex justify-start gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 6.75V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V6.75M2.25 6.75V5.625C2.25 3.96815 3.59315 2.625 5.25 2.625H12.75C14.4069 2.625 15.75 3.96815 15.75 5.625V6.75M2.25 6.75H15.75M12 1.5V3.75M6 1.5V3.75"
            stroke="#090003"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-GRAY">Due Date:</span>
        <span className={getDueDateColor()}>{formattedDueDate()}</span>
      </div>
      <div className="flex justify-start gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 14.25V3.75"
            stroke="#25282B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 9L9 3.75L14.25 9"
            stroke="#25282B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-GRAY">
          Priority: <span className="text-BLK">{getPriorityLevel()}</span>
        </span>
      </div>
      <div className="flex justify-start gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_646_2092)">
            <path
              d="M3.75 6.75L1.5 9L3.75 11.25"
              stroke="#25282B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.75 3.75L9 1.5L11.25 3.75"
              stroke="#25282B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 14.25L9 16.5L6.75 14.25"
              stroke="#25282B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 6.75L16.5 9L14.25 11.25"
              stroke="#25282B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 9H16.5"
              stroke="#25282B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 1.5V16.5"
              stroke="#25282B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_646_2092">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-GRAY">
          Complexity: <span className="text-BLK">{getComplexityLevel()}</span>
        </span>
      </div>
      {subTasks[0] ? (
        <ProgressRing
          percentage={percentageComplete}
          priorityLevel={priorityLevel}
        />
      ) : (
        false
      )}
    </div>
  );
}
