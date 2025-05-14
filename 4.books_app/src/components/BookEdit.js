import { useState, useContext } from "react";
import BookContext from "../context/books";

export const BookEdit = ({ book, handelEditClick }) => {
  const { editBookById } = useContext(BookContext);
  const [title, setTitle] = useState(book.title);

  const handleSaveClick = (e) => {
    editBookById(book.id, title);
    handelEditClick();
  };

  const handelChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="book-edit"
    >
      <label>Title</label>
      <input
        value={title}
        onChange={handelChange}
        type="text"
        className="input"
      />
      <button onClick={handleSaveClick} className="button is-primary">
        Save
      </button>
    </form>
  );
};
