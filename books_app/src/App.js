import { BookCreate } from "./components/BookCreate";
import { useState } from "react";
import { BooksList } from "./components/BooksList";

function App() {
  const [books, setBooks] = useState([]);

  const handlerCreateBook = (title) => {
    setBooks([...books, { id: Date.now(), title: title }]);
  };

  const handlerBookEdit = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks([...updatedBooks]);
  };

  const handlerBookDelete = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks([...updatedBooks]);
  };

  return (
    <>
      <div className="app">
        <BooksList
          books={books}
          handlerBookDelete={handlerBookDelete}
          handlerBookEdit={handlerBookEdit}
        />
        <BookCreate handlerCreateBook={handlerCreateBook} />
      </div>
    </>
  );
}

export default App;
