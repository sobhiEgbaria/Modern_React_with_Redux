import { SearchBar } from "./components/SearchBar";
import { SearchRequest } from "./api";

export const SearchHandler = async (term) => {
  const data = await SearchRequest(term);
  console.log(data);
};

function App() {
  return (
    <>
      <SearchBar SearchHandler={SearchHandler} />
    </>
  );
}

export default App;
