import "./index.css";

export const InfoBar = ({ position, text }) => {
  return (
    <div className={`info-bar ${position}`}>
      <h2>{text}</h2>
    </div>
  );
};
