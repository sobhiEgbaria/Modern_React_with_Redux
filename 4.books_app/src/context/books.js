import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const FetchData = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };

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

  const share = {
    books,
    deleteBookById,
    editBookById,
    handlerCreateBook,
    FetchData,
  };

  return <BookContext.Provider value={share}>{children}</BookContext.Provider>;
}
export { Provider };
export default BookContext;
