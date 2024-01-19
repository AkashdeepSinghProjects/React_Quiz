import { createContext, useState, useRef } from "react";
import QUESTIONS from "../util/questions";

export const QuestionContext = createContext({
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  skippedAnswers: 0,
  shuffledQuestionsArray: [],
  setTotalQuestions: () => {},
  addCorrectAnswer: () => {},
  addWrongAnswer: () => {},
  addSkippedAnswers: () => {},
  resetQuiz: () => {},
});

const initialState = {
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  skippedAnswers: 0,
};

export default function QuestionContextProvider({ children }) {
  const [quizValues, setQuizValues] = useState(initialState);
  const shuffledQuestions = useRef();

  if (!shuffledQuestions.current) {
    shuffledQuestions.current = [...QUESTIONS];
    shuffledQuestions.current.sort(() => 0.5 - Math.random());
  }

  function handleTotalQuestion(value) {
    setQuizValues((prevValue) => ({ ...prevValue, totalQuestions: value }));
  }
  function handleCorrectAnswers() {
    setQuizValues((prevValue) => ({
      ...prevValue,
      correctAnswers: prevValue.correctAnswers + 1,
    }));
  }
  function handleSkippedAnswers() {
    setQuizValues((prevValue) => ({
      ...prevValue,
      skippedAnswers: prevValue.skippedAnswers + 1,
    }));
  }
  function handleWrongAnswers() {
    setQuizValues((prevValue) => ({
      ...prevValue,
      wrongAnswers: prevValue.wrongAnswers + 1,
    }));
  }
  function handleReset() {
    setQuizValues(initialState);
    shuffledQuestions.current = null;
  }

  const contextValue = {
    totalQuestions: quizValues.totalQuestions,
    correctAnswers: quizValues.correctAnswers,
    wrongAnswers: quizValues.wrongAnswers,
    skippedAnswers: quizValues.skippedAnswers,
    shuffledQuestionsArray: shuffledQuestions.current,
    setTotalQuestions: handleTotalQuestion,
    addCorrectAnswer: handleCorrectAnswers,
    addWrongAnswer: handleWrongAnswers,
    addSkippedAnswers: handleSkippedAnswers,
    resetQuiz: handleReset,
  };
  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
}
