import AdvertisingOne from "../../assets/advertising-one.png"
import AdvertisingTwo from "../../assets/advertising-two.png"
import AdvertisingTree from "../../assets/advertising-tree.png"
import { useDevice } from '../DeviceContext/DeviceContext';
import "./AdvertisingTop.css"

const AdvertisingTop = () => {
    const { isMobile } = useDevice();
    return isMobile ? (
    <></>
    ) : (
    <div className="advertising-container">
        <div className="advertising-top">
            <img src={AdvertisingOne} alt="" />
            <img src={AdvertisingTwo} alt="" />
            <img src={AdvertisingTree} alt="" />
        </div>
    </div>
    )
}

export default AdvertisingTop