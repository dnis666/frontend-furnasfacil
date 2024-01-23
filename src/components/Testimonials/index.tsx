import { useDevice } from '../DeviceContext/DeviceContext';

import './style.css';

import imgdefault from '../../assets/avatar-default.jpeg';

const Testimonials = () => {
  const { isMobile } = useDevice();

  return isMobile ? (
    <></>
  ) : (
    <>
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimony">
            <div className="avatar">
              <img src={imgdefault} alt="Helena Silva Avatar" />
            </div>
            <div className="content">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                a massa in sapien ornare scelerisque quis a purus. Morbi
                convallis vitae leo ac tincidunt. Quisque at ornare libero. Duis
                rutrum sodales mi a porta. Nulla malesuada dolor vel purus
                tincidunt, a ultrices felis facilisis. Nam leo libero, efficitur
                sed nulla ut, tristique consequat lectus.
              </div>
              <div className="name">Helena Silva</div>
            </div>
          </div>
          <div className="testimony">
            <div className="avatar">
              <img src={imgdefault} alt="Helena Silva Avatar" />
            </div>
            <div className="content">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                a massa in sapien ornare scelerisque quis a purus. Morbi
                convallis vitae leo ac tincidunt. Quisque at ornare libero. Duis
                rutrum sodales mi a porta. Nulla malesuada dolor vel purus
                tincidunt, a ultrices felis facilisis. Nam leo libero, efficitur
                sed nulla ut, tristique consequat lectus.
              </div>
              <div className="name">Helena Silva</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
