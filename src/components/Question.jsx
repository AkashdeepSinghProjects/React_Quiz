import { useState } from "react";
import QUESTIONS from "../util/questions";
export default function Question({ questionIndex, onUserInputAnswer }) {
  const [userAnswer, setUserAnswer] = useState({ answer: "", isCorrect: null });

  let lockOptionColor = "bg-[#FCAA67]";
  let cssClass =
    " mt-2 text-2xl font-light rounded-md px-4 text-start hover:bg-[#FCAA67] ";
  if (userAnswer.answer !== "") {
    cssClass = " mt-2 text-2xl font-light rounded-md px-4 text-start ";
  }
  if (userAnswer.isCorrect) {
    lockOptionColor = "bg-[#8CFF98]";
  } else if (userAnswer.isCorrect === false) {
    lockOptionColor = "bg-[#FB3640]";
  }

  function handleOnOptionClick(option) {
    setUserAnswer((prevState) => ({ ...prevState, answer: option }));
    setTimeout(() => {
      if (option === QUESTIONS[questionIndex].correctAnswer) {
        setUserAnswer((prevState) => ({ ...prevState, isCorrect: true }));
      } else {
        setUserAnswer((prevState) => ({ ...prevState, isCorrect: false }));
      }
      setTimeout(() => {
        onUserInputAnswer(option);
      }, 2000);
    }, 2000);
  }

  return (
    <section className="text-white ">
      <h2 className="  text-3xl font-light">
        Q{questionIndex + 1}: {QUESTIONS[questionIndex].question}
      </h2>
      <ol
        type="1"
        className="mt-3 list-[upper-alpha] list-inside flex flex-col"
      >
        {QUESTIONS[questionIndex].options.map((option, ind) => (
          <button
            className={
              option === userAnswer.answer
                ? cssClass + lockOptionColor
                : cssClass + " bg-[#6C91BF]"
            }
            disabled={userAnswer.answer !== ""}
            key={ind}
            onClick={() => {
              handleOnOptionClick(option);
            }}
          >
            <li> {option}</li>
          </button>
        ))}
      </ol>
    </section>
  );
}
