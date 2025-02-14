import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      if (remember) {
        localStorage.setItem('remember', 'true');
      }
      navigate('/adverts');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <label>
        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
        Recordar contraseña
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
