import { BookCreate } from "./components/BookCreate";
import { useEffect, useContext } from "react";
import { BooksList } from "./components/BooksList";
import BookContext from "./context/books";

function App() {
  const { FetchData } = useContext(BookContext);

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <div className="app">
        <h1>Books List</h1>

        <BooksList />
        <BookCreate />
      </div>
    </>
  );
}

export default App;
