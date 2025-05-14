import { BookCard } from "./BookCard";
import BookContext from "../context/books";
import { useContext } from "react";

export const BooksList = () => {
  const { books } = useContext(BookContext);
  console.log(books);

  return (
    <>
      <div className="book-list">
        {books.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    </>
  );
};
