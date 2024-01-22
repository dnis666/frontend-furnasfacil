import TopImg from '../../assets/top-house.jpg';
import { useDevice } from '../DeviceContext/DeviceContext';
import './TopRent.css';

const TopRent = () => {
  const { isMobile } = useDevice();

  const topRentImg = TopImg;

  return isMobile ? (
    <></>
  ) : (
    <>
      <div className="toprent-container">
        <div className="toprent-content">
          <div className="toprent-house">
            <div className="toprent-info">
              <div className="ring-container">
                <div className="circle-container">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <div className="text">
                  <strong>DISPONÍVEL</strong>
                </div>
              </div>
              <div className="infos">
                <div className="left-side">
                  <div className="local">Furnas • Mangueirão</div>
                </div>
                <div className="right-side">
                  <div className="valor">R$700,00</div>
                  <div className="quartos">4 Quartos</div>
                </div>
              </div>
            </div>
            <div className="toprent-image">
              <img src={topRentImg} alt="Casa disponível" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRent;
