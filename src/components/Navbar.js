import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/adverts">Anuncios</Link></li>
        <li><Link to="/adverts/new">Nuevo Anuncio</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

const [tags, setTags] = useState([]);

useEffect(() => {
  const fetchTags = async () => {
    const response = await axios.get(`${apiUrl}/v1/adverts/tags`);
    setTags(response.data);
  };

  fetchTags();
}, []);

// En el JSX
<select>
  {tags.map(tag => (
    <option key={tag} value={tag}>
      {tag}
    </option>
  ))}
</select>



export default Navbar;
