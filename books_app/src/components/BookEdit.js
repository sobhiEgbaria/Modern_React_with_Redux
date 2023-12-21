import { useState } from "react";

export const BookEdit = ({ handlerBookEdit, bookId, handelEditClick }) => {
  const [title, setTitle] = useState("");

  const handleSaveClick = (e) => {
    handlerBookEdit(bookId, title);
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
