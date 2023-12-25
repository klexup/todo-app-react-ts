import ProgressRing from "./ProgressRing";
import { useNavigate } from "react-router-dom";

export default function Todo({ value, toggleCompleted }) {
  const {
    taskName,
    priorityLevel,
    complexityLevel,
    dueDate,
    dueTime,
    subTasks,
    tags,
    id,
    completed,
  } = value;

  const navigate = useNavigate();

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

  const calculatePercentageComplete = () => {
    const totalSubtasks = subTasks.length;
    let subtasksComplete = 0;
    subTasks.forEach((value) => {
      if (value.subtaskCompleted) {
        subtasksComplete += 1;
      }
    });
    return Math.floor((subtasksComplete / totalSubtasks) * 100);
  };

  const percentageComplete = calculatePercentageComplete();

  let tagColorIteration = 1;

  return (
    <div
      className={`relative mb-2 mt-2 flex w-[398px] cursor-pointer flex-col gap-1 rounded-2xl p-2 transition-all hover:shadow-md ${
        completed ? "bg-green-200" : "bg-WH"
      }`}
      onClick={() => {
        navigate(`viewTodo/${id}`);
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <div
            className={`h-[18px] w-[18px] rounded-full ${getPriorityColor()}`}
          ></div>
          <div className="ml-2 font-medium">{taskName}</div>
        </div>
        <div className="flex gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-all hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`editTodo/${id}`);
            }}
          >
            <circle cx="16" cy="16" r="16" fill="#0D99FF" fillOpacity="0.1" />
            <path
              d="M17.2747 21.9239H22.0574"
              stroke="#717171"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6413 10.7168C17.194 10.0125 18.0873 10.0493 18.7923 10.602L19.8348 11.4195C20.5398 11.9723 20.7895 12.8295 20.2368 13.5353L14.02 21.4665C13.8123 21.732 13.495 21.8888 13.1575 21.8925L10.7598 21.9233L10.2168 19.587C10.1403 19.2593 10.2168 18.9143 10.4245 18.648L16.6413 10.7168Z"
              stroke="#717171"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4771 12.2021L19.0726 15.0206"
              stroke="#717171"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transition-all hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              toggleCompleted(id);
            }}
          >
            <circle cx="16" cy="16" r="16" fill="#0D99FF" fillOpacity="0.1" />
            <path
              d="M22 11.5L13.75 19.75L10 16"
              stroke="#717171"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
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
      <div className="flex gap-2 overflow-hidden">
        {tags.map((value, index) => {
          let color = "";
          if (tagColorIteration === 1) {
            color = "bg-yellow-200";
            tagColorIteration = 2;
          } else if (tagColorIteration === 2) {
            color = "bg-pink-200";
            tagColorIteration = 3;
          } else if (tagColorIteration === 3) {
            color = "bg-teal-200";
            tagColorIteration = 1;
          }
          return (
            <div
              key={index}
              className={`rounded-full ${color}  pb-1 pl-2 pr-2 pt-1 text-RADIOTEXT`}
            >
              {value}
            </div>
          );
        })}
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
