import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewAdvertPage() {
  const [formData, setFormData] = useState({ name: '', sale: 'true', tags: [], price: '', photo: null });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, photo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    await axios.post('http://localhost:3001/api/v1/adverts', formDataToSend, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });

    navigate('/adverts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
      <select name="sale" value={formData.sale} onChange={handleChange}>
        <option value="true">Venta</option>
        <option value="false">Compra</option>
      </select>
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Precio" required />
      <input type="file" name="photo" onChange={handleFileChange} />
      <select name="tags" value={formData.tags} onChange={handleChange} multiple>
        {/* Aquí puedes cargar los tags disponibles desde el backend */}
      </select>
      <button type="submit">Crear Anuncio</button>
    </form>
  );
}

export default NewAdvertPage;
