import "./Header.css";
import { useDevice } from '../DeviceContext/DeviceContext';
import LogoFull from "../../assets/logo-full.png";
import Login from "../../assets/login.svg";
import { useState } from "react";

const Header = () => {
  const { isMobile } = useDevice();
  const [login, setLogin] = useState(false);

  const loginBlock = () => {
    setLogin(!login);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página
    console.log('Formulário submetido:', formData);
    // Aqui você pode, por exemplo, enviar os dados para um servidor
  };

  return (
    isMobile ? (
      <>
        <div className="header-mobile-container">
          <div className="header-mobile-contents">
            <div className="mobile-logo">
              <img src={LogoFull} width={150} alt="logo" />
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="header-container">
          <div className="header-contents">
            <div className="logo">
              <img src={LogoFull} alt="logo" />
            </div>
            <div className="links">
              <a href="/">Alugar</a>
              <a href="/">Comprar</a>
            </div>
            <div className={login ? 'login-open' : 'login'} onClick={loginBlock}>
              <img src={Login} alt="login" height={40} />
            </div>
            {login && (
              <>
                <div className="login-block">
                  <form onSubmit={handleSubmit}>
                    {/* <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div> */}

                    <div className="block-form email">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="block-form password">
                      <label htmlFor="password">Senha</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit">Entrar</button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default Header;
