import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdvertPage = ({ advertId }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    // Lógica para borrar el anuncio
    setShowConfirmation(false);
  };
  
  // En el JSX
  {showConfirmation && (
    <div>
      <p>¿Estás seguro de que quieres borrar este anuncio?</p>
      <button onClick={confirmDelete}>Sí</button>
      <button onClick={() => setShowConfirmation(false)}>No</button>
    </div>
  )}

  return (
    <div>
      <button onClick={handleDelete}>Borrar Anuncio</button>
      {showConfirmation && (
        <div>
          <p>¿Estás seguro de que quieres borrar este anuncio?</p>
          <button onClick={confirmDelete}>Sí</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default AdvertPage;
