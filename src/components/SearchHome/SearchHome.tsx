import { useState } from "react";
import { useDevice } from '../DeviceContext/DeviceContext';
import "./SearchHome.css";

const SearchHome = () => {
  const { isMobile } = useDevice();
  const [formData, setFormData] = useState({
    region: "",
    entryDate: "",
    exitDate: "",
    price: "",
    rooms: "",
  });

  const cities = [
    "Aguanil",
    "Alfenas",
    "Alpinópolis",
    "Alterosa",
    "Areado",
    "Boa Esperança",
    "Cabo Verde",
    "Camacho",
    "Campo Belo",
    "Campo do Meio",
    "Campos Gerais",
    "Cana Verde",
    "Candeias",
    "Capitólio",
    "Carmo do Rio Claro",
    "Conceição da Aparecida",
    "Coqueiral",
    "Cristais",
    "Divisa Nova",
    "Elói Mendes",
    "Fama",
    "Formiga",
    "Guapé",
    "Ilicínea",
    "Juruaia",
    "Lavras",
    "Machado",
    "Muzambinho",
    "Nepomuceno",
    "Paraguaçu",
    "Perdões",
    "Pimenta",
    "Poço Fundo",
    "Ribeirão Vermelho",
    "São João Batista do Glória",
    "São José da Barra",
    "Serrania",
    "Três Pontas",
    "Varginha",
  ];

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Formulário submetido com os seguintes dados:", formData);
    // Aqui você pode enviar os dados para um servidor ou fazer qualquer outra coisa com eles.
  };

  return isMobile ? (
    <>

    </>
  ) : (
  <>
        <div className="search-home-container">
        <div className="search-home-contents">
          <form onSubmit={handleSubmit}>
            <h2>Encontre a sua casa do final de semana</h2>
            <div className="campo-regiao">
              <label htmlFor="region"></label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Região
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo-data">
              <div>
                <label htmlFor="entryDate">Data de entrada:</label>
                <input
                  type="date"
                  id="entryDate"
                  name="entryDate"
                  value={formData.entryDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="exitDate">Data de saída:</label>
                <input
                  type="date"
                  id="exitDate"
                  name="exitDate"
                  value={formData.exitDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="dois-campos">
              <div>
                <label htmlFor="price"></label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Valor até:"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="rooms"></label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  placeholder="Quartos"
                />
              </div>
            </div>
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>
  </>
  )
};

export default SearchHome;
