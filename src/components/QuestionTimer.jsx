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
    const isMobile = window.innerWidth <= 768;
    const intervalParameter = isMobile ? 100 : 10;
    const interval = setInterval(() => {
      setProgressBarValue((prev) => prev - intervalParameter);
    }, intervalParameter);

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
