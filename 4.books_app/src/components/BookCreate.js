import { useState, useContext } from "react";
import BookContext from "../context/books";

export const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { handlerCreateBook } = useContext(BookContext);
  // this function handling the form, calling the handlerCreateBook as props, and clear the state
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") {
      handlerCreateBook(title);
    }
    setTitle("");
  };

  // this function handling the input and update the state in change
  const handleChang = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>New Book</h3>
      <form action="" onSubmit={handleSubmit}>
        <label>Enter The Title: </label>

        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChang}
        />

        <button className="button">Add The Book</button>
      </form>
    </div>
  );
};
