import { BookCreate } from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const handlerCreateBook = (title) => {
    setBooks([...books, title]);

    setTimeout(() => {
      console.log(books);
    }, 3000);
  };

  const handlerBookEdit = () => {};

  const handlerBookDelete = () => {};

  return (
    <>
      <BookCreate handlerCreateBook={handlerCreateBook} />
    </>
  );
}

export default App;
