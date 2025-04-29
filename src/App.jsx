import { useState, useId } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Checkbox } from "./components/Checkbox";
import { Timer } from "./components/Timer";

function App() {
  const [displayCounter, setDisplayCounter] = useState(false);
  const [displayTimer, setDisplayTimer] = useState(true);
  const counterCheckboxId = useId();
  const timerCheckboxId = useId();
  const onToggleCounter = () => {
    setDisplayCounter((v) => !v);
  };
  const onToggleTimer = () => {
    setDisplayTimer((v) => !v);
  };

  const checkboxDivStyle = {
    display: "flex",
    gap: ".8rem",
  };
  
  return (
    <>
      <div style={checkboxDivStyle}>
        <Checkbox
          id={timerCheckboxId}
          checked={displayTimer}
          onToggle={onToggleTimer}
        />{" "}
        <label htmlFor={timerCheckboxId}>Afficher le timer</label>
        <Checkbox
          id={counterCheckboxId}
          checked={displayCounter}
          onToggle={onToggleCounter}
        />{" "}
        <label htmlFor={counterCheckboxId}>Afficher le compteur</label>
      </div>
      <hr />
      {displayCounter && <Counter />}
      {displayTimer && <Timer />}
    </>
  );
}

export default App;
