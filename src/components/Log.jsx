import { useContext } from "react";
import Button from "./Button";
import CircularProgress from "@mui/joy/CircularProgress";
import { QuestionContext } from "../data/QuestionContext";

export default function Log({ userAnswerList, onRestart }) {
  const {
    correctAnswers,
    wrongAnswers,
    skippedAnswers,
    totalQuestions,
    shuffledQuestionsArray,
  } = useContext(QuestionContext);
  let cssClass = " my-2 p-2 rounded-lg ";

  function calculatePercentage(value) {
    return Math.round((value / totalQuestions) * 100);
  }

  return (
    <div className=" text-white sm:w-[50%] sm:mx-[25%] bg-[#120331] rounded-2xl py-3 px-4 mt-3">
      <h2 className=" text-center text-3xl font-light uppercase">Quiz Log</h2>
      <div className=" flex justify-evenly my-2">
        <CircularProgress
          determinate
          value={calculatePercentage(correctAnswers)}
          sx={{ "--CircularProgress-size": "80px" }}
          color="success"
          variant="solid"
        >
          {calculatePercentage(correctAnswers)}%
        </CircularProgress>
        <CircularProgress
          determinate
          value={calculatePercentage(wrongAnswers)}
          sx={{ "--CircularProgress-size": "80px" }}
          color="danger"
          variant="solid"
        >
          {calculatePercentage(wrongAnswers)}%
        </CircularProgress>
        <CircularProgress
          color="warning"
          determinate
          value={calculatePercentage(skippedAnswers)}
          sx={{ "--CircularProgress-size": "80px" }}
          variant="solid"
        >
          {calculatePercentage(skippedAnswers)}%
        </CircularProgress>
      </div>
      <div className=" flex justify-end my-2">
        <Button onClick={onRestart} green={true}>
          Restart the quiz
        </Button>
      </div>

      <ol className=" text-xl mt-2">
        {userAnswerList.map((answer, index) => (
          <li
            key={index}
            className={
              shuffledQuestionsArray[index].correctAnswer === answer
                ? cssClass + " bg-green-800"
                : answer === null
                ? cssClass + " bg-amber-800"
                : cssClass + " bg-red-900"
            }
          >
            <p id="question-log">
              Q{index + 1}: {shuffledQuestionsArray[index].question}
            </p>
            {answer ? (
              <p>
                <span>Your answer:</span> {answer}
              </p>
            ) : (
              <p>SKIPPED</p>
            )}
            {shuffledQuestionsArray[index].correctAnswer !== answer && (
              <div>
                <p>
                  <span> Correct Answer:</span>{" "}
                  {shuffledQuestionsArray[index].correctAnswer}{" "}
                </p>
                <p>
                  <span>Reasoning:</span>{" "}
                  {shuffledQuestionsArray[index].reasoning}
                </p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
