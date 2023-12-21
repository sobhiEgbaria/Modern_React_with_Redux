import { useState } from "react";
import { BookEdit } from "./BookEdit";
export const BookCard = ({ book, handlerBookDelete, handlerBookEdit }) => {
  const [content, setContent] = useState(true);

  const handelDeleteClick = (e) => {
    handlerBookDelete(book.id);
  };

  const handelEditClick = () => {
    setContent(!content);
  };

  return (
    <>
      <div className="book-show">
        {content ? (
          book.title
        ) : (
          <BookEdit
            handlerBookEdit={handlerBookEdit}
            bookId={book.id}
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
