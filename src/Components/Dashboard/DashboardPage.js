import React, { useState, useEffect } from 'react';
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
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';


function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const token = state.token;
  const user = state.user;


  useEffect(() => {
    // Fetch initial search results when the component mounts
    searchDoctorAndHospital(searchTerm); // eslint-disable-next-line
  }, [searchTerm]); // eslint-disable-next-line

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleViewProfile = () => {
    // Navigate to the ProfilePage and pass token as state
    navigate('/profile', { state: { token, user } });
  };

  const handleButtonClick = () => {
    navigate('/booking', { state: { token, user } })

  };



  const searchDoctorAndHospital = (searchTerm) => {
    if (searchTerm === null || searchTerm.trim() === '') {
      setSearchResults([]);
    } else {
      try {
        axios
          .get(`https://speedocare.pythonanywhere.com/speedocare/clinics/${searchTerm}`)
          .then((response) => {
            setSearchResults([response.data]);
          console.log(searchResults)
          })
          .catch((error) => {
            console.error('Failed to fetch clinic info:', error.message);
          });
      } catch (error) {
        console.error('Failed to fetch clinic info:', error.message);
      }
    }
    
  };

  const handleLogout = async () => {
    try {
      // Call the logout API with the token in headers
      const response = await axios.post('https://speedocare.pythonanywhere.com/speedocare/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); // Logout successful message
  
      // For this example, we are simply navigating to the login page after logout
      navigate('/login'); // Replace '/login' with the actual path of your login page
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#0a7557' }}>
        <Toolbar>
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
          {/* Notification Icon */}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          {/* Profile Icon */}
          <IconButton color="inherit" onClick={handleProfileMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleViewProfile}>
              View Profile
            </MenuItem>
            <MenuItem component={Link} to="/appointments">
              View Appointments
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', backgroundColor: '#ffffff' }}>
              <Typography variant="h5">Welcome to the Dashboard</Typography>
              <Typography variant="body1">
                This is the main content of your dashboard.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            style={{ backgroundColor: '#12d39d' }}
          >
            Book Now
          </Button>
        </Grid>
      </Container>
      {searchResults.length > 0 && (
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h5">Search Results</Typography>
        <ul>
          {searchResults.map((result) => (
            result.map((resultInner) => (
            <li key={resultInner.clinic_id}>
              <Link
                to={`/clinic/${resultInner.clinic_id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Paper elevation={3} style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}>
                  <Typography variant="body1">{resultInner.clinic_name}</Typography>
                </Paper>
              </Link>
            </li>
            ))
          ))}
        </ul>
      </Container>
    )}
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
                    component={Link}
                    to="/faq"
                    style={{ marginLeft: '-12px', color: '#61dafb' }}
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
