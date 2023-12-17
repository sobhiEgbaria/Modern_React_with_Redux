import "./ImageCard.css";
export const ImageCard = ({ imag }) => {
  return (
    <>
      <div className="card">
        <img src={imag.urls.small_s3} alt="Avatar" />
        <div className="container">
          <h4 className="content">{imag.alt_description}</h4>
        </div>
      </div>
    </>
  );
};
