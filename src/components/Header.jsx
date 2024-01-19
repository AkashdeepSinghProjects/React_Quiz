import logo from "../assets/CerebralCraze-logos.jpeg";
import { useContext } from "react";
import { QuestionContext } from "../data/QuestionContext";
export default function Header() {
  const { totalQuestions, correctAnswers, wrongAnswers, skippedAnswers } =
    useContext(QuestionContext);
  return (
    <header className=" text-white sm:w-[80%] sm:mx-[10%]">
      <img src={logo} className=" rounded-full h-48 w-48 mt-3 mx-auto" />
      {totalQuestions > 0 && (
        <div className=" flex justify-end">
          <div>
            <p>Total Questions: {totalQuestions} </p>
            <p className=" text-amber-800">
              Skipped Question{skippedAnswers > 1 && "s"}: {skippedAnswers}
            </p>
            <p className=" text-[#8CFF98]">
              Correct Answer{correctAnswers > 1 && "s"}: {correctAnswers}
            </p>
            <p className=" text-[#FB3640]">
              Wrong Answer{wrongAnswers > 1 && "s"}: {wrongAnswers}{" "}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
