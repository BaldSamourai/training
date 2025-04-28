import { useState, useId } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [checked, setChecked] = useState(true);
  const checkboxId = useId();
  const onToggle = () => {
    setChecked((v) => !v);
  };
  return (
    <>
      <Checkbox id={checkboxId} checked={checked} onToggle={onToggle} />{" "}
      Afficher le compteur
      {checked && <Counter />}
    </>
  );
}

export default App;
