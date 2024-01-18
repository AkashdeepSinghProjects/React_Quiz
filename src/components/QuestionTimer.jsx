import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/joy";
export default function QuestionTimer({ onUserInputAnswer, time }) {
  const [progressBarValue, setProgressBarValue] = useState(time);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onUserInputAnswer(null);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [onUserInputAnswer, time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBarValue((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const valueInPercent = (progressBarValue / time) * 100;
  return (
    <div className=" my-3">
      <LinearProgress
        color={valueInPercent < 40 ? "danger" : "success"}
        determinate
        size="lg"
        variant="plain"
        value={valueInPercent}
      />
    </div>
  );
}
