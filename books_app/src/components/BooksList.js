import { BookCard } from "./BookCard";

export const BooksList = ({ books, deleteBookById, editBookById }) => {
  return (
    <>
      <div className="book-list">
        {books.map((book) => {
          return (
            <BookCard
              book={book}
              key={book.id}
              deleteBookById={deleteBookById}
              editBookById={editBookById}
            />
          );
        })}
      </div>
    </>
  );
};
