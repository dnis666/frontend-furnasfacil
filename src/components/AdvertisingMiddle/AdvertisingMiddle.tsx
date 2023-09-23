import AdvertisingMiddleImg from "../../assets/advertising-four.png"
import { useDevice } from '../DeviceContext/DeviceContext';
import "./AdvertisingMiddle.css"

const AdvertisingMiddle = () => {
    const { isMobile } = useDevice();
    return isMobile ? (
    <></>
    ) : (
    <>
        <div className="advertising-middle-container">
            <div className="advertising-middle-content">
                <img src={AdvertisingMiddleImg} alt=""/>
            </div>
        </div>
    </>
    )
}

export default AdvertisingMiddle