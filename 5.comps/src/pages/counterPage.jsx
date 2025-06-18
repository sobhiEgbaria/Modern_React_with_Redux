import { react, useState } from "react";
import Button from "../components/Button";

//custom hook
const useCounter = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  return {
    counter,
    clickHandler,
  };
};

const CounterPage = ({ initialCount }) => {
  const { counter, clickHandler } = useCounter({ initialCount });

  return (
    <>
      <h1>counter: {counter}</h1>
      <Button onClick={clickHandler} primary>
        increment
      </Button>
    </>
  );
};

export default CounterPage;
