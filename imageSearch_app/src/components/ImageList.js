import { ImageCard } from "./imgeCard";

export const ImageList = ({ imagData }) => {
  return (
    <div className="cardContainer">
      {imagData.map((imag) => (
        <ImageCard key={imag.id} imag={imag} />
      ))}
    </div>
  );
};
