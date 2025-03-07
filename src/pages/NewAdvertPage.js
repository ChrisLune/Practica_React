import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewAdvertPage = () => {
  const [advertData, setAdvertData] = useState({ name: '', price: '', tags: [] });
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleCreateAdvert = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/v1/adverts`, advertData);
      const newAdvertId = response.data.id;
      navigate(`/adverts/${newAdvertId}`);
    } catch (error) {
      console.error('Error al crear el anuncio:', error);
    }
  };

  return (
    <form onSubmit={handleCreateAdvert}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={advertData.name}
          onChange={(e) => setAdvertData({ ...advertData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={advertData.price}
          onChange={(e) => setAdvertData({ ...advertData, price: e.target.value })}
          required
        />
      </div>
      {/* Agrega más campos según sea necesario */}
      <button type="submit">Crear Anuncio</button>
    </form>
  );
};

export default NewAdvertPage;
