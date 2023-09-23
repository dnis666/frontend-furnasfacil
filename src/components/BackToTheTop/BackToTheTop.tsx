import React, { useState, useEffect } from 'react';
import './BackToTheTop.css'; // Importe o CSS. Não se esqueça de criar este arquivo!

const BackToTheTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          {/* Você pode substituir o conteúdo dentro do div por uma imagem ou ícone se preferir */}
          Voltar ao topo
        </div>
      )}
    </div>
  );
};

export default BackToTheTop;
