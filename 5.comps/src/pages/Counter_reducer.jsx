import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../css_components/Panel";

const INCREMENT_COUNTER = "increment-counter";
const DECREMENT_COUNTER = "decrement-counter";
const CHANGE_VALUE = "change-value";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_VALUE:
      return {
        ...state,
        counter: state.counter + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

const Counter_reducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount,
    valueToAdd: 0,
  });

  const incrementHandler = () => {
    dispatch({
      type: INCREMENT_COUNTER,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: DECREMENT_COUNTER,
    });
  };
  const onChangeHandler = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };
  const addValueHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE,
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
