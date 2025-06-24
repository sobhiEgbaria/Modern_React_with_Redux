import { useDispatch, useSelector } from "react-redux";
import { changeNme, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.form.name;
  });

  const cost = useSelector((state) => {
    return state.form.cost;
  });

  const handleNameChange = (event) => {
    dispatch(changeNme(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    dispatch(changeNme(""));
    dispatch(changeCost(0));
  };
  return (
    <>
      <div className="car-form panel">
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <div className="field">
              <label className="label">Name</label>

              <input
                type="text"
                className="input is-expanded"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="field">
              <label className="label">Cost</label>
              <input
                type="number"
                className="input is-expanded"
                value={cost || ""}
                onChange={handleCostChange}
              />
            </div>
          </div>
          <div className="field">
            <button className="button is-link">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CarForm;
