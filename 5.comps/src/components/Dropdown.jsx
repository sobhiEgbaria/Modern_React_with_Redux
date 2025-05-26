import React from "react";

const Dropdown = ({ options }) => {
  return (
    <>
      {options.map((option) => {
        return <div key={option.value}>{option.label}</div>;
      })}
    </>
  );
};

export default Dropdown;
