// import tylenol from "../src/resources/tylenol.jpeg";
// import advil from "../src/resources/advil.jpeg";
// import DrugCard from "./components/DrugCard";
import "bootstrap/dist/css/bootstrap.css";
import "./mainpage.css";
import StatePanel from "./components/StatePanel";

function App() {
  return (
    <div className="container-fluid">
      <h1>EasyDose</h1>
      <p>
        Enter your child's age and weight in kg, then click on a drug to calculate
        dose
      </p>
      <hr></hr>
      <StatePanel />
      {/* <div className='drug-cards'>
        <DrugCard name="Tylenol" picture={tylenol} />
        <DrugCard name="Advil" picture={advil} />
      </div> */}
    </div>
  );
}

export default App;
