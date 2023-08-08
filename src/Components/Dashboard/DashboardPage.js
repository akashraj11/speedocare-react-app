import React, { useState } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Box,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

// Sample data for doctors and hospitals (You can replace this with your actual data)
const doctorData = [
  { id: 1, name: 'Dr. John Doe' },
  { id: 2, name: 'Dr. Jane Smith' },
  { id: 3, name: 'Dr. Michael Johnson' },
];

const hospitalData = [
  { id: 1, name: 'XYZ Hospital' },
  { id: 2, name: 'ABC Medical Center' },
  { id: 3, name: '123 Clinic' },
];

function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
    searchDoctorAndHospital(value);
  };

  const searchDoctorAndHospital = (searchTerm) => {
    // Handle the null case when the search bar is cleared
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    // Filter doctors and hospitals based on the search term
    const filteredDoctors = doctorData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredHospitals = hospitalData.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults([...filteredDoctors, ...filteredHospitals]);
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Call the logout API
      const response = await axios.post('http://127.0.0.1:5000/speedocare/logout');
      console.log(response.data); // Logout successful message

      // For this example, we are simply navigating to the login page after logout
      navigate('/login'); // Replace '/login' with the actual path of your login page
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <AppBar position="static" style={{ backgroundColor: '#0a7557' }}>
        <Toolbar>
          {/* Add your logo here */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Clinic Reservation
          </Typography>
          <Autocomplete
            freeSolo
            options={[]}
            value={searchTerm}
            onChange={handleSearchChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                style={{ marginLeft: '20px', marginRight: '20px' }}
              />
            )}
            style={{ marginLeft: '20px', marginRight: '20px', width: '500px' }}
          />
          {/* Logout Button */}
          <Button color="inherit" onClick={handleLogout} style={{ marginRight: '20px' }}>
            Logout
          </Button>
          {/* Add more menu items as needed */}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {/* Replace this with your dashboard content */}
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', backgroundColor: '#ffffff' }}>
              <Typography variant="h5">Welcome to the Dashboard</Typography>
              <Typography variant="body1">
                This is the main content of your dashboard.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Book Now Button */}
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/booking" // Replace "/booking" with the actual path of the booking page
            style={{ backgroundColor: '#12d39d' }}
          >
            Book Now
          </Button>
        </Grid>
      </Container>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Typography variant="h5">Search Results</Typography>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </Container>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#f7f7f7', padding: '20px', marginTop: '20px' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">RESOURCES</Typography>
              <ul>
                <li>Resource Hub</li>
                <li>Compare</li>
                <li>Company & News</li>
                <li>
                  <Button
                    variant="text"
                    color="inherit"
                    component={Link} // Use Link component for navigation
                    to="/faq" // Redirect to the FAQ page when the button is clicked
                    style={{ marginLeft: '-12px', color: '#61dafb' }} // Turquoise color for link
                  >
                    FAQs
                  </Button>
                </li>
                <li>API Support Request</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">OUR REVIEWS</Typography>
              <ul>
                <li>Capterra</li>
                <li>G2</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">ABOUT US</Typography>
              <ul>
                <li>Careers</li>
                <li>We're Hiring</li>
                <li>Developers</li>
                <li>Refer a Provider</li>
                <li>About SpeedoCare</li>
              </ul>
            </Grid>
          </Grid>
          <hr style={{ margin: '20px 0' }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                Copyright © 2023. Made in Conestoga, DTK Campus
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box display="flex" alignItems="center">
                <Facebook fontSize="small" style={{ marginRight: '8px' }} />
                <Twitter fontSize="small" style={{ marginRight: '8px' }} />
                <Instagram fontSize="small" style={{ marginRight: '8px' }} />
                <LinkedIn fontSize="small" style={{ marginRight: '8px' }} />
                <YouTube fontSize="small" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default DashboardPage;
