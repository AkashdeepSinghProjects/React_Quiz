import QUESTIONS from "../util/questions";
export default function Question({ questionIndex, onUserInputAnswer }) {
  return (
    <section className="text-white ">
      <h2 className="  text-2xl">
        Q{questionIndex + 1}: {QUESTIONS[questionIndex].question}
      </h2>
      <ol type="A">
        {QUESTIONS[questionIndex].options.map((option, ind) => (
          <li key={ind} className=" border-t-indigo-700 pt-2 px-4">
            <button
              onClick={() => {
                onUserInputAnswer(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
