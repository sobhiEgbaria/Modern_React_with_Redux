import { BookCard } from "./BookCard";

export const BooksList = ({ books, handlerBookDelete, handlerBookEdit }) => {
  return (
    <>
      <div className="book-list">
        {books.map((book) => {
          return (
            <BookCard
              book={book}
              key={book.id}
              handlerBookDelete={handlerBookDelete}
              handlerBookEdit={handlerBookEdit}
            />
          );
        })}
      </div>
    </>
  );
};
