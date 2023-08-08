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
      const response = await axios.post('http://127.0.0.1:5000/speedocare/login', {
        username,
        password,
      });

      console.log(response.data); // Login successful message

      // Store authentication token (if any) for subsequent API calls (You can use local storage, Redux, or any other state management library)
      const authToken = response.data.token;

      // For this example, we are simply navigating to the dashboard page after login
      navigate('/dashboard'); // Replace '/dashboard' with the actual path of your dashboard page
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
