import { ProfileCards } from "./components/ProfileCards";
import Alexa_image from "./images/alexa.png";
import Cortana_image from "./images/cortana.png";
import Siri_image from "./images/siri.png";
import "./components/ProfileCards.css";

function App() {
  return (
    <>
      <div className="cards_container">
        <ProfileCards assistant="Alexa" img={Alexa_image} />
        <ProfileCards assistant="Cortana" img={Cortana_image} />
        <ProfileCards assistant="Siri" img={Siri_image} />
      </div>
    </>
  );
}

export default App;
