import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({ name: '', sale: 'todos', priceMin: '', priceMax: '', tags: [] });

  useEffect(() => {
    const fetchAdverts = async () => {
      const response = await axios.get('http://localhost:3001/api/v1/adverts', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        params: filters
      });
      setAdverts(response.data.results);
    };

    fetchAdverts();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <form>
        <input type="text" name="name" value={filters.name} onChange={handleFilterChange} placeholder="Nombre" />
        <select name="sale" value={filters.sale} onChange={handleFilterChange}>
          <option value="todos">Todos</option>
          <option value="true">Venta</option>
          <option value="false">Compra</option>
        </select>
        <input type="number" name="priceMin" value={filters.priceMin} onChange={handleFilterChange} placeholder="Precio mínimo" />
        <input type="number" name="priceMax" value={filters.priceMax} onChange={handleFilterChange} placeholder="Precio máximo" />
        <select name="tags" value={filters.tags} onChange={handleFilterChange} multiple>
          {/* Aquí puedes cargar los tags disponibles desde el backend */}
        </select>
      </form>
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>
            <Link to={`/adverts/${advert.id}`}>{advert.name}</Link> - {advert.price}€ - {advert.sale ? 'Venta' : 'Compra'} - {advert.tags.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
