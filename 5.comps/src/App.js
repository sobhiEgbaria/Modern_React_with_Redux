import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPge from "./pages/DropdownPge";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/counterPage";
import CounterReducer from "./pages/Counter_reducer";

function App() {
  return (
    <>
      {/* <ButtonPage />
      <AccordionPage />
      <DropdownPge /> 
      <ModalPage />
      <CounterPage initialCount={10} />
      <TablePage />
      */}
      <CounterReducer initialCount={10} />
    </>
  );
}

export default App;
