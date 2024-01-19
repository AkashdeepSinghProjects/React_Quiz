import { useEffect, useState, useContext } from "react";
import { LinearProgress } from "@mui/joy";
import { QuestionContext } from "../data/QuestionContext";
export default function QuestionTimer({ onUserInputAnswer, time }) {
  const [progressBarValue, setProgressBarValue] = useState(time);
  const { addSkippedAnswers } = useContext(QuestionContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      addSkippedAnswers();
      onUserInputAnswer(null);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [onUserInputAnswer, time, addSkippedAnswers]);

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
        color={valueInPercent < 40 && time > 4500 ? "danger" : "success"}
        determinate
        size="lg"
        variant="plain"
        value={valueInPercent}
      />
    </div>
  );
}
