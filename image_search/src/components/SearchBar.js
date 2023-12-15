import "./SearchBar.css";
import { useState } from "react";

export const SearchBar = ({ SearchHandler }) => {
  const [term, setTerm] = useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          SearchHandler(term);
        }}
        className="form"
      >
        <input
          value={term}
          type="text"
          name="search"
          className="input"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
          placeholder="Enter Photos Name"
        />
      </form>
    </>
  );
};
