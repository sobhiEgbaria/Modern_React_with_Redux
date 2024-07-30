import { BookCreate } from "./components/BookCreate";
import { useState, useEffect } from "react";
import { BooksList } from "./components/BooksList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const FetchData = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handlerCreateBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    setBooks([...books, res.data]);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...res.data };
      }
      return book;
    });
    setBooks([...updatedBooks]);
  };

  const deleteBookById = async (id) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);

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
