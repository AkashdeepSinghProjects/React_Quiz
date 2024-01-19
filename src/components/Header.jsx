import logo from "../assets/CerebralCraze-logos.jpeg";
import { useContext } from "react";
import { QuestionContext } from "../data/QuestionContext";
export default function Header() {
  const { totalQuestions, correctAnswers, wrongAnswers, skippedAnswers } =
    useContext(QuestionContext);
  return (
    <header className=" text-white sm:mt-5 sm:w-[65%] sm:ms-[25%] sm:me-[10%] sm:flex">
      <div className=" sm:w-[50vw] mt-4 sm:mt-0">
        <img src={logo} className=" rounded-full h-48 w-48 mx-auto" />
      </div>

      {totalQuestions > 0 && (
        <div className=" flex sm:justify-end justify-center mt-4 sm:mt-0 min-w-fit">
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
