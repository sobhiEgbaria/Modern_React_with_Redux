import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../css_components/Panel";

const reducer = (state, action) => {
  if (action.type == "increment-counter") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type == "decrement-counter") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type == "change-value") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  if (action.type == "add-value") {
    return {
      ...state,
      counter: state.counter + state.valueToAdd,
      valueToAdd: 0,
    };
  }
};

const Counter_reducer = ({ initialCount }) => {
  // const [counter, setCounter] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount,
    valueToAdd: 0,
  });

  const incrementHandler = () => {
    dispatch({
      type: "increment-counter",
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "decrement-counter",
    });
  };
  const onChangeHandler = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: "change-value",
      payload: value,
    });
  };
  const addValueHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "add-value",
    });
  };

  return (
    <Panel className="m-3 w-sm">
      <h1>counter: {state.counter}</h1>
      <div className="flex flex-row">
        <Button onClick={incrementHandler} primary>
          increment
        </Button>
        <Button onClick={decrementHandler} secondary>
          decrement
        </Button>
      </div>
      <form>
        <label>Add a lot: </label>
        <input
          value={state.valueToAdd || ""}
          onChange={onChangeHandler}
          type="number"
          className="border p-1 m-2 bg-gray-50 border-gray-300"
        />
        <Button onClick={addValueHandler} success>
          Add it!!
        </Button>
      </form>
    </Panel>
  );
};

export default Counter_reducer;
