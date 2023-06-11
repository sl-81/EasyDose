// contains all states, namely infoforms, result heading and panel displaying results
import InfoForm from "./InfoForm";
import ResultPanel from "./ResultPanel";
import { useState, ChangeEvent } from "react";
import tylenol from "../resources/tylenol.jpeg";
import advil from "../resources/advil.jpeg";
import DrugCard from "./DrugCard";
import Patient from "../model/Patient";
import Tylenol from "../model/Tylenol";
import Advil from "../model/Advil";
import TooSmallError from "../errors/TooSmallError";
import TooOldError from "../errors/TooOldError";

function StatePanel() {
  const [statusCode, setStatusCode] = useState(0);
  const [ageInput, setAgeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [dose, setDose] = useState(0);
  const t = new Tylenol();
  const a = new Advil();

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeInput(event.target.value);
  };

  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeightInput(event.target.value);
  };

  const handleTylenolClick = () => {
    try {
      const patient = new Patient(parseFloat(weightInput), parseInt(ageInput));
      setDose(patient.getMaxDoseForWeight(t));
      setStatusCode(1);
    } catch (error) {
      if (error instanceof TooSmallError) {
        setStatusCode(4);
      } else if (error instanceof TooOldError) {
        setStatusCode(5);
      } else {
        setStatusCode(3);
      }
    } 
    
  };

  const handleAdvilClick = () => {
    try {
      const patient = new Patient(parseFloat(weightInput), parseInt(ageInput));
      setDose(patient.getMaxDoseForWeight(a));
      setStatusCode(2);
    } catch (error) {
      if (error instanceof TooSmallError) {
        setStatusCode(4);
      } else if (error instanceof TooOldError) {
        setStatusCode(5);
      } else {
        setStatusCode(3);
      }
    } 
  };

  return (
    <div>
      {statusCode === 0 && <div></div>}

      {statusCode === 1 && (
        <div className="result">
          <div className="heading">Dose</div>
          <ResultPanel
            drug="Tylenol"
            tabletStrength={t.getTabletStrength(dose)}
            partialTab={t.getPartialTab(dose)}
            dose={dose}
          />
          <br></br>
        </div>
      )}

      {statusCode === 2 && (
        <div className="result">
          <div className="heading">Dose</div>
          <ResultPanel
            drug="Advil"
            tabletStrength={a.getTabletStrength(dose)}
            partialTab={a.getPartialTab(dose)}
            dose={dose}
          />
          <br></br>
        </div>
      )}

      {statusCode === 3 && (
        <div className="result">
          <div className="error">Error</div>
          <p>Please enter a valid weight and age</p>
          <br></br>
        </div>
      )}

      {statusCode === 4 && (
        <div className="result">
          <div className="error">Error</div>
          <p>Please consult your doctor before using</p>
          <br></br>
        </div>
      )}

      {statusCode === 5 && (
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
        <DrugCard name="Advil" picture={advil} handleClick={handleAdvilClick} />
      </div>
    </div>
  );
}

export default StatePanel;
