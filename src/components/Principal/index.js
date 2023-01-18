
import './index.css'
import { Banner } from '../Banner';
import { ShoesContainer } from '../ShoesContainer';
export const Principal = () => {
  return (
    <div className="principal-container">
      <h1 className="principal-title">JordanShoes</h1>
      <Banner />
      <h2 className="principal-subtitle">Destaques</h2>
      <p className="principal-body">
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
      </p>
      <ShoesContainer />
    </div>
  );
};
