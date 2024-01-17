import Question from "./Question";
import { useState } from "react";
import QUESTIONS from "../util/questions";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const questionDisplayIndex = userAnswers.length;
  const isQuizComplete = userAnswers.length === QUESTIONS.length;

  function handleAnswerInput(answer) {
    setUserAnswers((previousAns) => [...previousAns, answer]);
  }

  if (isQuizComplete) {
    return (
      <div>
        <h2>Quiz Complete</h2>
      </div>
    );
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
