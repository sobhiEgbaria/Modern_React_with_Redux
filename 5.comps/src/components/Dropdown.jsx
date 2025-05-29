import { useState } from "react";
import Panel from "../components/Panel";

import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };
  const handelOptionClick = (option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1 flex justify-between"
        key={option.id}
        onClick={() => handelOptionClick(option)}
      >
        {option.label} <GoChevronLeft className="text-lg" />
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between item-center cursor-pointer"
        onClick={handelClick}
      >
        {value}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen ? (
        <Panel className="absolute top-full">{renderOptions}</Panel>
      ) : null}
    </div>
  );
};

export default Dropdown;
