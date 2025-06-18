import { useState } from "react";
import Button from "../components/Button";

const Counter_reducer = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>counter: {counter}</h1>
      <div className="flex">
        <Button onClick={incrementHandler} primary>
          increment
        </Button>
        <Button onClick={decrementHandler} secondary>
          decrement
        </Button>
      </div>
    </>
  );
};

export default Counter_reducer;
