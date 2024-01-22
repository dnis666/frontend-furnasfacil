import TopImg from '../../assets/top-house.png';
import { useDevice } from '../DeviceContext/DeviceContext';
import './TopRent.css';

const TopRent = () => {
  const { isMobile } = useDevice();

  const topRentImg = TopImg;

  const divStyle = {
    backgroundImage: `url(${topRentImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '1207px',
    height: '258px',
  };

  return isMobile ? (<></>) : (
    <>
      <div className="toprent-container">
        <div className="toprent-content">
          <div className="toprent-house" style={divStyle}>
            <div className="toprent-info">
              <div className="ring-container">
                <div className="circle-container">                
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <div className="text"><strong>DISPONÍVEL</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRent;
