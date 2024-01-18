import Button from "./Button";
import Slider from "@mui/joy/Slider";
import QUESTIONS from "../util/questions";
import { useState } from "react";
export default function StartPage({ onStart }) {
  const [configValues, setConfigValues] = useState({
    numberOfQuestions: 3,
    time: 15,
  });

  function handleChange(type, value) {
    setConfigValues((prevValue) => ({ ...prevValue, [type]: value }));
  }

  return (
    <div className=" text-white">
      <label className=" text-xl">Number of questions: </label>
      <Slider
        color="success"
        disabled={false}
        marks={false}
        min={3}
        size="lg"
        valueLabelDisplay="on"
        max={QUESTIONS.length}
        value={configValues.numberOfQuestions}
        onChange={(e) => handleChange("numberOfQuestions", e.target.value)}
      />
      <div className=" flex justify-between">
        <label className=" text-xl ">Per Question Time(in seconds) :</label>
        <input
          type="number"
          min={5}
          max={30}
          value={configValues.time}
          onChange={(e) => handleChange("time", e.target.value)}
          className=" text-black"
        />
      </div>

      <div className=" my-3 flex justify-end">
        <Button onClick={() => onStart(configValues)} green={true}>
          Start the Quiz
        </Button>
      </div>
    </div>
  );
}
