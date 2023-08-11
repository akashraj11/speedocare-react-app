import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Call the login API
      const response = await axios.post('http://speedocare.pythonanywhere.com/speedocare/login', {
        username,
        password,
      });

      // Store authentication token (if any) for subsequent API calls (You can use local storage, Redux, or any other state management library)
      const token = response.data.auth_token;
      const user = response.data.user_id;
      console.log('user')
      console.log(user)
      // navigate(`/dashboard?id=${encodeURIComponent(response.data.user_id)}&token=${encodeURIComponent(token)}`);
      navigate('/dashboard', { state: { token, user } });
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px', backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#ffffff' }}>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ backgroundColor: '#0a7557', marginTop: '20px' }}>
          Login
        </Button>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          New User? <Link to="/register" style={{ color: '#0a7557' }}>Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default LoginPage;
