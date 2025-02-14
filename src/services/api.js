import axios from 'axios';

const response = await axios.get('http://localhost:3001/api/v1/adverts', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    params: filters
  });

export default api;
