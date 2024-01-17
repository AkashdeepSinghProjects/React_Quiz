import Question from "./Question";
import { useState } from "react";
import QUESTIONS from "../util/questions";
import Log from "./Log";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const questionDisplayIndex = userAnswers.length;
  const isQuizComplete = userAnswers.length === QUESTIONS.length;
  // const isQuizComplete = userAnswers.length === 3;

  function handleAnswerInput(answer) {
    setUserAnswers((previousAns) => [...previousAns, answer]);
  }

  function handleRestart() {
    setUserAnswers([]);
  }

  if (isQuizComplete) {
    return <Log userAnswerList={userAnswers} onRestart={handleRestart} />;
  }

  return (
    <main className=" sm:w-[50%] sm:mx-[25%] bg-[#120331] rounded-2xl py-8 px-4 mt-3">
      <Question
        key={questionDisplayIndex}
        questionIndex={questionDisplayIndex}
        onUserInputAnswer={handleAnswerInput}
      />
    </main>
  );
}
