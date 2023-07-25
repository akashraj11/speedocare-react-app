// LoginPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // For demonstration purposes, hardcoded credentials
    const hardcodedEmail = 'test@example.com';
    const hardcodedPassword = 'password';

    // Check if the entered credentials match the hardcoded ones
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // If credentials match, perform the login action (e.g., set a user session)
      console.log('Login successful');
      setError('');

      // Use the 'navigate' function to navigate to the dashboard page upon successful login
      navigate('/dashboard');
    } else {
      // If credentials do not match, display an error message
      setError('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
        <Box mt={2}>
          <Typography variant="body1" gutterBottom>
            Don't have an account?{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Register here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
