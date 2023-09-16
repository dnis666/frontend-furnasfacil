import TopImg from "../../assets/top-house.png";
import "./TopRent.css";

const TopRent = () => {
  const topRentImg = TopImg;

  const divStyle = {
    backgroundImage: `url(${topRentImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "1207px",
    height: "258px",
  };

  return (
    <>
      <div className="toprent-container">
        <div className="toprent-content">
          <div className="toprent-house" style={divStyle}>
            <div className="toprent-info">
              <div className="ring-container">
                
                <div className="ringring"></div>
                <div className="circle"><strong>DISPONÍVEL</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRent;
