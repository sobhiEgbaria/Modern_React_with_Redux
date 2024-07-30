import "./ProfileCards.css";
export const ProfileCards = ({ assistant, img }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{assistant}</b>
          </h4>
          <p>{assistant} is an Assistant</p>
        </div>
      </div>
    </>
  );
};
