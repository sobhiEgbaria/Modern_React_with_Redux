import { SearchBar } from "./components/SearchBar";
import { SearchRequest } from "./api";
import { ImageList } from "./components/ImageList";
import { useState } from "react";

function App() {
  const [imagData, setImagData] = useState([]);

  const SearchHandler = async (term) => {
    const data = await SearchRequest(term);
    setImagData(data);
  };

  return (
    <>
      <SearchBar SearchHandler={SearchHandler} />
      <ImageList imagData={imagData} />
    </>
  );
}

export default App;
