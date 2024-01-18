import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuestionContextProvider from "./data/QuestionContext";
export default function App() {
  return (
    <QuestionContextProvider>
      <Header />
      <Quiz />
    </QuestionContextProvider>
  );
}
