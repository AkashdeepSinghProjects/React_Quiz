import { useCallback, useState, useContext } from "react";
import Question from "./Question";
import StartPage from "./StartPage";
import QUESTIONS from "../util/questions";
import Log from "./Log";
import Button from "./Button";
import { QuestionContext } from "../data/QuestionContext";

let totalDisplayQuestions = QUESTIONS.length;
let questionTime = 15000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  let { setTotalQuestions, resetQuiz } = useContext(QuestionContext);

  const questionDisplayIndex = userAnswers.length;
  const handleAnswerInput = useCallback((answer) => {
    setUserAnswers((previousAns) => [...previousAns, answer]);
  }, []);
  function handleStart(configValues) {
    resetQuiz();
    totalDisplayQuestions = configValues.numberOfQuestions;
    setTotalQuestions(configValues.numberOfQuestions);
    questionTime = configValues.time * 1000;
    setStartQuiz(true);
    setUserAnswers([]);
  }
  const isQuizComplete = userAnswers.length === totalDisplayQuestions;
  function handleRestart() {
    setStartQuiz(false);
    setUserAnswers([]);
    resetQuiz();
  }

  if (isQuizComplete) {
    return <Log userAnswerList={userAnswers} onRestart={handleRestart} />;
  }

  return (
    <main className=" sm:w-[50%] sm:mx-[25%] bg-[#120331] rounded-2xl py-8 px-4 mt-3">
      {startQuiz ? (
        <>
          <Question
            key={questionDisplayIndex}
            questionIndex={questionDisplayIndex}
            onUserInputAnswer={handleAnswerInput}
            questionTimeInitialValue={questionTime}
          />
          <div className="flex justify-end mt-11">
            <Button onClick={handleRestart} red={true}>
              Reset Quiz
            </Button>
          </div>
        </>
      ) : (
        <StartPage onStart={handleStart} />
      )}
    </main>
  );
}
