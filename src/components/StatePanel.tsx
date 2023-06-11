// contains all states, namely infoforms, result heading and panel displaying results
import InfoForm from "./InfoForm";
import ResultPanel from "./ResultPanel";
import { useState, ChangeEvent } from "react";
import tylenol from "../resources/tylenol.jpeg";
import advil from "../resources/advil.jpeg";
import DrugCard from "./DrugCard";
import Patient from "../model/Patient";

function StatePanel() {
  const [statusCode, setStatusCode] = useState(0);
  const [ageInput, setAgeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeInput(event.target.value);
  };

  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeightInput(event.target.value);
  };

  const handleTylenolClick = () => {
    const p = new Patient(parseFloat(weightInput), parseInt(ageInput));
    console.log(p);
  };

  const handleAdvilClick = () => {
    const p = new Patient(parseFloat(weightInput), parseInt(ageInput));
    console.log(p);
  };

  return (
    <div>

      {statusCode === 0 && (
        <div></div>
      )}

      {statusCode === 1 && (
        <div className="result">
          <div className="heading">Dose</div>
          <ResultPanel />
          <br></br>
        </div>
      )}

      {statusCode === 2 && (
        <div className="result">
          <div className="error">Error</div>
          <p>Please enter a valid weight and age</p>
          <br></br>
        </div>
      )}

      {statusCode === 3 && (
        <div className="result">
          <div className="error">Error</div>
          <p>Please consult your doctor before using</p>
          <br></br>
        </div>
      )}

      {statusCode === 4 && (
        <div className="result">
          <div className="error">Error</div>
          <p>Please use adult dose</p>
          <br></br>
        </div>
      )}

      <InfoForm
        placeholdertext="Age of your child"
        value={ageInput}
        onChange={handleAgeChange}
      />
      <br></br>
      <InfoForm
        placeholdertext="Weight of your child"
        value={weightInput}
        onChange={handleWeightChange}
      />
      <br></br>
      <div className="drug-cards">
        <DrugCard
          name="Tylenol"
          picture={tylenol}
          handleClick={handleTylenolClick}
        />
        <DrugCard
          name="Advil"
          picture={advil}
          handleClick={handleAdvilClick}
        />
      </div>
    </div>
  );
}

export default StatePanel;
