import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const incrementer = () => {
    setCount((prev) => prev + 1);
  };
  const decrementer = () => {
    setCount((prev) => prev - 1);
  };
  const reinitialiser = () => {
    if (window.confirm("Etes-vous sûr de vouloir réinitialiser la valeur ?")) {
      setCount(0);
    }
  };

  const divStyle = {
    display: "flex",
    gap: ".5rem",
    backgroundColor: "#fff",
  };

  const disabledButtonStyle = {
    cursor: "not-allowed",
  };
  return (
    <>
      <p>Compteur : {count}</p>
      <div style={divStyle}>
        <button
          style={count < 1 ? disabledButtonStyle : undefined}
          onClick={decrementer}
          disabled={count === 0}
        >
          Decrementer
        </button>
        <button onClick={reinitialiser} disabled={count === 0}>
          Remettre à 0
        </button>
        <button onClick={incrementer}>Incrementer</button>
      </div>
    </>
  );
}
