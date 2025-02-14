import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdvertPage() {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/adverts/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setAdvert(response.data.result);
      } catch (error) {
        navigate('/notfound');
      }
    };

    fetchAdvert();
  }, [id, navigate]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/api/v1/adverts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    navigate('/adverts');
  };

  if (!advert) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{advert.name}</h1>
      <p>{advert.price}€</p>
      <p>{advert.sale ? 'Venta' : 'Compra'}</p>
      <p>{advert.tags.join(', ')}</p>
      {advert.photo && <img src={`http://localhost:3001/public/${advert.photo}`} alt={advert.name} />}
      <button onClick={handleDelete}>Borrar Anuncio</button>
    </div>
  );
}

export default AdvertPage;
