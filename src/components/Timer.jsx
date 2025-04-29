import { useEffect, useId, useRef, useState } from "react";

export function Timer() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const [hasStarted, setHasStarted] = useState(false);

  const secondsId = useId();
  const minutesId = useId();
  const hoursId = useId();

  const inputsRef = useRef({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    if (!hasStarted) return;

    const timerId = setInterval(() => {
      setTime((prevTimer) => {
        let { seconds, minutes, hours } = prevTimer;
        if (seconds > 0) seconds--;
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [hasStarted]);

  const handleSeconds = (e) => {
    let inputValue = removeLeadingZero(e.target.value);
    inputsRef.current.seconds = inputValue || "0";
    setTime((prevTime) => ({
      ...prevTime,
      seconds: parseInt(inputValue) || 0,
    }));
  };
  const handleMinutes = (e) => {
    let inputValue = removeLeadingZero(e.target.value);
    inputsRef.current.minutes = inputValue || "0";

    setTime((prevTime) => ({
      ...prevTime,
      minutes: parseInt(e.target.value) || 0,
    }));
  };
  const handleHours = (e) => {
    let inputValue = removeLeadingZero(e.target.value);
    inputsRef.current.hours = inputValue || "0";

    setTime((prevTime) => ({
      ...prevTime,
      hours: parseInt(e.target.value) || 0,
    }));
  };

  const startTimer = () => {
    setHasStarted(true);
  };

  const resetTimer = () => {
    setHasStarted(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    inputsRef.current = { seconds: 0, minutes: 0, hours: 0 };
  };

  return (
    <>
      <div>
        <input
          id={hoursId}
          type="number"
          max={60}
          min={0}
          value={inputsRef.current.hours}
          onChange={handleHours}
        />
        <input
          id={minutesId}
          type="number"
          max={60}
          min={0}
          value={inputsRef.current.minutes}
          onChange={handleMinutes}
        />
        <input
          id={secondsId}
          type="number"
          max={60}
          min={0}
          value={inputsRef.current.seconds}
          onChange={handleSeconds}
        />
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <span>{time.hours}</span>:<span>{time.minutes}</span>:
        <span>{time.seconds}</span>
      </div>
    </>
  );
}

const removeLeadingZero = (inputValue) => {
  return inputValue.startsWith("0") && inputValue.length > 1
    ? inputValue.replace(/^0+/, "") || "0"
    : inputValue;
};
