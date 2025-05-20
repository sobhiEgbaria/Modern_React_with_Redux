import React from "react";

const Dropdown = ({ options }) => {
  return (
    <>
      {options.map((option) => {
        return <div key={Math.random() * 100}>{option.label}</div>;
      })}
    </>
  );
};

export default Dropdown;
