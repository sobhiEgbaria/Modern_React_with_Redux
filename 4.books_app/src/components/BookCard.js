import { useState, useContext } from "react";
import { BookEdit } from "./BookEdit";
import BookContext from "../context/books";

export const BookCard = ({ book }) => {
  const { deleteBookById } = useContext(BookContext);
  const [content, setContent] = useState(true);

  const handelDeleteClick = (e) => {
    deleteBookById(book.id);
  };

  const handelEditClick = () => {
    setContent(!content);
  };

  return (
    <>
      <div className="book-show">
        <img
          src={`https://picsum.photos/seed/${book.id}/200/150`}
          alt="Books"
        />
        {content ? (
          book.title
        ) : (
          <BookEdit book={book} handelEditClick={handelEditClick} />
        )}
        <div className="actions">
          <button onClick={handelEditClick} className="edit">
            Edit
          </button>
          <button className="delete" onClick={handelDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
