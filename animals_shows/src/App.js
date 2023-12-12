import { useState } from "react";
import { AnimalShow } from "./components/animalShow";
function App() {
  const [animals, setAnimal] = useState([]);

  const getRandomAnimal = () => {
    const animals_list = ["cat", "dog", "bird", "cow", "gator", "horse"];
    return animals_list[Math.floor(Math.random() * animals_list.length)];
  };

  const handelClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal) => {
    return (
      <>
        <AnimalShow animal={animal} />
      </>
    );
  });
  return (
    <>
      <button onClick={handelClick}>Add Animal </button>
      <div>{renderAnimals}</div>
    </>
  );
}

export default App;
