import { BookCreate } from "./components/BookCreate";
import { useState } from "react";
import { BooksList } from "./components/BooksList";

function App() {
  const [books, setBooks] = useState([]);

  const handlerCreateBook = (title) => {
    setBooks([...books, { id: Date.now(), title: title }]);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks([...updatedBooks]);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks([...updatedBooks]);
  };

  return (
    <>
      <div className="app">
        <h1>Books List</h1>

        <BooksList
          books={books}
          deleteBookById={deleteBookById}
          editBookById={editBookById}
        />
        <BookCreate handlerCreateBook={handlerCreateBook} />
      </div>
    </>
  );
}

export default App;
