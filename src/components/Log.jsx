import QUESTIONS from "../util/questions";
import Button from "./Button";
import CircularProgress from "@mui/joy/CircularProgress";

export default function Log({ userAnswerList, onRestart }) {
  let cssClass = " my-2 p-2 rounded-lg ";
  const correctAnswerlength = userAnswerList.filter(
    (answer, ind) => answer === QUESTIONS[ind].correctAnswer
  ).length;
  const correctAnswerPercent = Math.round(
    (correctAnswerlength / userAnswerList.length) * 100
  );
  console.log(correctAnswerPercent);

  return (
    <div className=" text-white sm:w-[50%] sm:mx-[25%] bg-[#120331] rounded-2xl py-3 px-4 mt-3">
      <h2 className=" text-center text-3xl font-light uppercase">Quiz Log</h2>
      <div className=" flex justify-evenly">
        <CircularProgress
          determinate
          value={correctAnswerPercent}
          sx={{ "--CircularProgress-size": "80px" }}
          color="success"
          variant="solid"
        >
          {correctAnswerPercent}%
        </CircularProgress>
        <CircularProgress
          determinate
          value={100 - correctAnswerPercent}
          sx={{ "--CircularProgress-size": "80px" }}
          color="danger"
          variant="solid"
        >
          {100 - correctAnswerPercent}%
        </CircularProgress>
      </div>
      <div className=" flex justify-end">
        <Button onClick={onRestart} green={true}>
          Restart the quiz
        </Button>
      </div>

      <ol className=" text-xl mt-2">
        {userAnswerList.map((answer, index) => (
          <li
            key={index}
            className={
              QUESTIONS[index].correctAnswer === answer
                ? cssClass + " bg-green-800"
                : cssClass + " bg-red-900"
            }
          >
            <p>
              Q{index + 1}: {QUESTIONS[index].question}
            </p>
            <p>Your Answer: {answer}</p>
            {QUESTIONS[index].correctAnswer !== answer && (
              <div>
                <p>Correct Answer: {QUESTIONS[index].correctAnswer} </p>
                <p>Reasoning: {QUESTIONS[index].reasoning}</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
