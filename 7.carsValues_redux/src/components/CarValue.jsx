import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarValue = () => {
  const dispatch = useDispatch();
  let totalCost = 0;
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  cars.map((car) => (totalCost += car.cost));
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
