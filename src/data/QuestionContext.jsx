import { createContext, useState } from "react";

export const QuestionContext = createContext({
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  setTotalQuestions: () => {},
  addCorrectAnswer: () => {},
  addWrongAnswer: () => {},
  resetQuiz: () => {},
});

const initialState = {
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export default function QuestionContextProvider({ children }) {
  const [quizValues, setQuizValues] = useState(initialState);
  function handleTotalQuestion(value) {
    setQuizValues((prevValue) => ({ ...prevValue, totalQuestions: value }));
  }
  function handleCorrectAnswers() {
    setQuizValues((prevValue) => ({
      ...prevValue,
      correctAnswers: prevValue.correctAnswers + 1,
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
  }

  const contextValue = {
    totalQuestions: quizValues.totalQuestions,
    correctAnswers: quizValues.correctAnswers,
    wrongAnswers: quizValues.wrongAnswers,
    setTotalQuestions: handleTotalQuestion,
    addCorrectAnswer: handleCorrectAnswers,
    addWrongAnswer: handleWrongAnswers,
    resetQuiz: handleReset,
  };
  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
}
