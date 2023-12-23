import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressRing({ percentage, priorityLevel }) {
  const getPriorityColor = () => {
    if (priorityLevel <= 3) {
      return "#0d99ff";
    } else if (priorityLevel <= 7) {
      return "#fe7e08";
    } else {
      return "#ff4034";
    }
  };
  return (
    <>
      <div className="absolute bottom-10 right-2 h-[44px] w-[44px]">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({ pathColor: getPriorityColor() })}
        />
      </div>
    </>
  );
}
