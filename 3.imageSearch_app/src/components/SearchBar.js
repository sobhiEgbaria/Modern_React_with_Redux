import "./SearchBar.css";
import { useState } from "react";

export const SearchBar = ({ SearchHandler }) => {
  const [term, setTerm] = useState("");

  return (
    <>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          SearchHandler(term);
        }}
      >
        <input
          type="text"
          name="search"
          className="input"
          placeholder="Enter Photos Name"
          // value={term} giv the state control the input instead the browser "try value = "123" "
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        />
      </form>
    </>
  );
};
