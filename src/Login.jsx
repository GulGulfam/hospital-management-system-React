import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (username && password) {
      navigate('/dashboard');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className='container'>
      <div className='image-container'>
        <img
          src="https://media.istockphoto.com/id/1447358767/photo/help-healthcare-or-doctor-holding-hands-with-patient-zoom-for-support-trust-or-communication.jpg?s=1024x1024&w=is&k=20&c=9jajg3uzrmZ24XDVNR-J_m7ucANdiXKWqwD9ZE50TOQ="
          alt="Loading"
        />
      </div>
      <div className='border-line'></div>
      <div className='login-container'>
        <div className='login'>
          <h2>Login</h2>
        </div>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Login"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;
