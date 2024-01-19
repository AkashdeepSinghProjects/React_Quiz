import { useRef, useState, useContext } from "react";
import QuestionTimer from "./QuestionTimer";
import { QuestionContext } from "../data/QuestionContext";

export default function Question({
  questionIndex,
  onUserInputAnswer,
  questionTimeInitialValue,
}) {
  const [userAnswer, setUserAnswer] = useState({
    answer: "",
    isCorrect: null,
  });
  const [questionTime, setQuestionTime] = useState(questionTimeInitialValue);
  const shuffleAnswers = useRef();
  const { addCorrectAnswer, addWrongAnswer, shuffledQuestionsArray } =
    useContext(QuestionContext);
  let lockOptionColor = "bg-[#FCAA67]";
  let cssClass =
    " mt-2 text-2xl font-light rounded-md px-4 text-start hover:bg-[#FCAA67] ";

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...shuffledQuestionsArray[questionIndex].options];
    shuffleAnswers.current.sort(() => 0.5 - Math.random());
  }

  if (userAnswer.answer !== "") {
    cssClass = " mt-2 text-2xl font-light rounded-md px-4 text-start ";
  }
  if (userAnswer.isCorrect) {
    lockOptionColor = "bg-[#8CFF98]";
  } else if (userAnswer.isCorrect === false) {
    lockOptionColor = "bg-[#FB3640]";
  }

  function handleOnOptionClick(option) {
    setUserAnswer((prevState) => ({
      ...prevState,
      answer: option,
    }));
    setQuestionTime(4050);
    setTimeout(() => {
      // setQuestionTime(1000);
      if (option === shuffledQuestionsArray[questionIndex].correctAnswer) {
        addCorrectAnswer();
        setUserAnswer((prevState) => ({
          ...prevState,
          isCorrect: true,
        }));
      } else {
        addWrongAnswer();
        setUserAnswer((prevState) => ({
          ...prevState,
          isCorrect: false,
        }));
      }
      setTimeout(() => {
        onUserInputAnswer(option);
      }, 2000);
    }, 2000);
  }

  return (
    <section className="text-white ">
      <QuestionTimer
        key={questionIndex + "" + questionTime}
        time={questionTime}
        onUserInputAnswer={onUserInputAnswer}
      />
      <h2 className="  text-3xl font-light">
        Q{questionIndex + 1}: {shuffledQuestionsArray[questionIndex].question}
      </h2>
      <ol
        type="1"
        className="mt-3 list-[upper-alpha] list-inside flex flex-col"
      >
        {shuffleAnswers.current.map((option, ind) => (
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
