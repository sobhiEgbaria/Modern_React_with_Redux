import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handelRemove = (car) => {
    dispatch(removeCar(car.id));
  };

  const carsToRender = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name}-${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handelRemove(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {carsToRender} <hr />
    </div>
  );
};

export default CarList;
