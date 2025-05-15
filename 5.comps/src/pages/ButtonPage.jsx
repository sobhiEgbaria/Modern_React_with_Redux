import {
  GoCheck,
  GoCodescanCheckmark,
  GoDownload,
  GoGlobe,
} from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  const clickHandler = () => {
    console.log("gogo lolo");
  };
  return (
    <>
      <div>
        <Button primary outline>
          <GoCheck />
          primary outline
        </Button>
        <Button primary rounded>
          primary rounded
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCodescanCheckmark />
          secondary outline
        </Button>
        <Button secondary rounded>
          secondary rounded
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDownload />
          success outline
        </Button>
        <Button success rounded>
          success rounded
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoGlobe />
          warning outline
        </Button>
        <Button warning rounded>
          warning rounded
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoGlobe />
          danger outline
        </Button>
        <Button danger rounded>
          danger rounded
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
