// RegisterPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    // Create a user object
    const user = {
      username: username,
      name: name,
      email: email,
      password: password,
    };

    // Send the user object to the API or perform the necessary registration action
    console.log('New user registered:', user);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegistration}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
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
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default RegisterPage;
