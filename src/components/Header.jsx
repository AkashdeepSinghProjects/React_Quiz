import logo from "../assets/CerebralCraze-logos.jpeg";
import { useContext } from "react";
import { QuestionContext } from "../data/QuestionContext";
export default function Header() {
  const { totalQuestions, correctAnswers, wrongAnswers } =
    useContext(QuestionContext);
  return (
    <header className=" text-white sm:w-[80%] sm:mx-[10%]">
      <img src={logo} className=" rounded-full h-48 w-48 mt-3 mx-auto" />
      {totalQuestions > 0 && (
        <div className=" flex justify-end">
          <div>
            <p>Total Questions: {totalQuestions} </p>
            <p className=" text-[#8CFF98]">Correct Answers: {correctAnswers}</p>
            <p className=" text-[#FB3640]">Wrong Answers: {wrongAnswers} </p>
          </div>
        </div>
      )}
    </header>
  );
}
