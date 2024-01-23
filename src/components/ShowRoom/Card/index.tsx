import { type CardData } from '../../../@types/card';
import { useDevice } from '../../DeviceContext/DeviceContext';
import './style.css';

interface CardHouseProps {
  houseInfo: CardData;
}

const CardHouse = ({ houseInfo }: CardHouseProps) => {
  const { isMobile } = useDevice();

  return isMobile ? (
    <></>
  ) : (
    <>
      <div className="card-container">
        <div className="card-image">
          <img
            src={houseInfo.img}
            alt={`Casa ${houseInfo.cidadeLocal} • ${houseInfo.bairro}`}
          />
        </div>
        <div className="card-content">
          <div className="infos">
            <div className="local">
              {houseInfo.cidadeLocal} • {houseInfo.bairro}
            </div>
            <div className="bottom-infos">
              <div className="valor">{houseInfo.preco}</div>
              <div className="quartos">{houseInfo.quartos}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHouse;
