import { useDevice } from '../DeviceContext/DeviceContext';
import CardHouse from './Card';
import { type CardData } from '../../@types/card';

import './style.css';

import img1 from '../../assets/ex-casa-1.jpg';
import img2 from '../../assets/ex-casa-2.jpg';
import img3 from '../../assets/ex-casa-3.jpg';

const Showroom = () => {
  const { isMobile } = useDevice();

  const casas: CardData[] = [
    {
      id: 1,
      cidadeLocal: 'Furnas',
      bairro: 'Mangueirão',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img1,
    },
    {
      id: 2,
      cidadeLocal: 'Furnas',
      bairro: 'Fic',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img2,
    },
    {
      id: 3,
      cidadeLocal: 'Formiga',
      bairro: 'Centro',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img3,
    },
    {
      id: 4,
      cidadeLocal: 'Furnas',
      bairro: 'Mangueirão',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img1,
    },
    {
      id: 5,
      cidadeLocal: 'Furnas',
      bairro: 'Fic',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img2,
    },
    {
      id: 6,
      cidadeLocal: 'Formiga',
      bairro: 'Centro',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img3,
    },
    {
      id: 7,
      cidadeLocal: 'Furnas',
      bairro: 'Mangueirão',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img1,
    },
    {
      id: 8,
      cidadeLocal: 'Furnas',
      bairro: 'Fic',
      preco: 'R$ 700,00',
      quartos: '2 quartos',
      img: img2,
    },
  ];

  return isMobile ? (
    <></>
  ) : (
    <>
      <div className="showroom-container">
        <div className="showroom-content">
          {casas.map((casa: CardData) => {
            return <CardHouse key={casa.id} houseInfo={casa} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Showroom;
