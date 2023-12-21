import { useState } from "react";
import { BookEdit } from "./BookEdit";
export const BookCard = ({ book, deleteBookById, editBookById }) => {
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
          <BookEdit
            editBookById={editBookById}
            book={book}
            handelEditClick={handelEditClick}
          />
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
