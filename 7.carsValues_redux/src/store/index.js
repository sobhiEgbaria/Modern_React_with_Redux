import { configureStore } from "@reduxjs/toolkit";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carReducer,
} from "./slices/carsSlice";
import { changeCost, changeNme, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});
export default store;
export { changeCost, changeNme, changeSearchTerm, addCar, removeCar };
