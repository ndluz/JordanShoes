
import "./index.css";

export const ShoeCard = ({ title, photo, price }) => {
  return (
    <div className="shoe-container">
      <h2>{title}</h2>
      <img src={photo} alt='Air Jordan - Mid Dutch Green' />
      <p>R$ {price}</p>
    </div>
  );
};
