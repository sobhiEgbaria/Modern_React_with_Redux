import Dropdown from "../components/Dropdown";
import { useState } from "react";

const options = [
  {
    id: 1,
    label: "Red",
    value: "Red",
  },
  {
    id: 3,
    label: "green",
    value: "green",
  },
  {
    id: 2,
    label: "white",
    value: "white",
  },
];

const DropdownPage = () => {
  const [selectValue, setSelectValue] = useState("select");

  const handelSelectValue = (option) => {
    setSelectValue(option.label);
  };

  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selectValue}
        onChange={handelSelectValue}
      />
    </div>
  );
};

export default DropdownPage;
