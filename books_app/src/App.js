import { BookCreate } from "./components/BookCreate";
import { useState } from "react";
import { BooksList } from "./components/BooksList";
function App() {
  const [books, setBooks] = useState([]);

  const handlerCreateBook = (title) => {
    setBooks([...books, { id: Date.now(), title: title }]);
  };

  const handlerBookEdit = () => {};

  const handlerBookDelete = () => {};

  return (
    <>
      <div className="app">
        <BooksList books={books} />
        <BookCreate handlerCreateBook={handlerCreateBook} />
      </div>
    </>
  );
}

export default App;
