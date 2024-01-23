import LogoStartWeb from '../../assets/logo-start-web.png';
import LogoFull from '../../assets/logo-full.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logos">
          <div className="logo-furnas">
            <img src={LogoFull} width={158} alt="logo start web" />
          </div>
          <div className="logo-dev">
            <span>Desenvolvido por:</span>
            <img src={LogoStartWeb} width={158} alt="logo start web" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
