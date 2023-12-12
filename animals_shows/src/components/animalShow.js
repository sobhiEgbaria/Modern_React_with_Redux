import bird from "../imgs/bird.svg";
import cat from "../imgs/cat.svg";
import cow from "../imgs/cow.svg";
import dog from "../imgs/dog.svg";
import gator from "../imgs/gator.svg";
import horse from "../imgs/horse.svg";
import heart from "../imgs/heart.svg";
import "./animalShow.css";
import { useState } from "react";
export const AnimalShow = ({ animal }) => {
  const [clicks, setClicks] = useState(0);

  const animalsSvg = { bird, cat, cow, dog, gator, horse };

  const handelClick = (e) => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <div className="flex" onClick={handelClick}>
        <div class="card">
          <img src={animalsSvg[animal]} alt="" />
          <img
            className="heart"
            src={heart}
            style={{ width: 10 + 10 * clicks + "px" }}
          />
          <div class="container">{animal}</div>
        </div>
      </div>
    </>
  );
};
