import { useState } from "react";
import Question from "./Question";
import StartPage from "./StartPage";
import QUESTIONS from "../util/questions";
import Log from "./Log";
let totalDisplayQuestions = QUESTIONS.length;
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);

  const questionDisplayIndex = userAnswers.length;

  // const isQuizComplete = userAnswers.length === 3;

  function handleAnswerInput(answer) {
    setUserAnswers((previousAns) => [...previousAns, answer]);
  }

  function handleStart(configValues) {
    totalDisplayQuestions = configValues.numberOfQuestions;
    setStartQuiz(true);
    setUserAnswers([]);
  }
  const isQuizComplete = userAnswers.length === totalDisplayQuestions;
  function handleRestart() {
    setStartQuiz(false);
    setUserAnswers([]);
  }

  if (isQuizComplete) {
    return <Log userAnswerList={userAnswers} onRestart={handleRestart} />;
  }

  return (
    <main className=" sm:w-[50%] sm:mx-[25%] bg-[#120331] rounded-2xl py-8 px-4 mt-3">
      {startQuiz ? (
        <Question
          key={questionDisplayIndex}
          questionIndex={questionDisplayIndex}
          onUserInputAnswer={handleAnswerInput}
        />
      ) : (
        <StartPage onStart={handleStart} />
      )}
    </main>
  );
}
