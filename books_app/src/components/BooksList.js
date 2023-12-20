import { BookCard } from "./BookCard";

export const BooksList = ({ books }) => {
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
