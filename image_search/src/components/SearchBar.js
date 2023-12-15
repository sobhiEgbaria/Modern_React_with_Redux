import { SearchHandler } from "../App";
import { useState } from "react";

export const SearchBar = () => {
  const [term, setTerm] = useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          SearchHandler(term);
        }}
      >
        <input
          value={term}
          type="text"
          name="search"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        />
      </form>
    </>
  );
};
