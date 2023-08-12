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
import logo from '../../Assets/brand-icon.png';
import dashboardImage from '../../Assets/sc-background-2.png';

function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [notificationMenuAnchor, setNotificationMenuAnchor] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const token = state.token;
  const user = state.user;

  useEffect(() => {
    // Fetch initial search results when the component mounts
    searchDoctorAndHospital(searchTerm);
  }, [searchTerm]);

  // useEffect(() => {
  //   // Fetch notifications when the component mounts

  //   // Periodically fetch notifications every 10 seconds
  //   const notificationInterval = setInterval(fetchNotifications, 10000); // eslint-disable-next-line

  //   return () => {
  //     clearInterval(notificationInterval); // eslint-disable-next-line
  //   };
  // });  // eslint-disable-next-line

  const handleNotificationMenuClose = () => {
    setNotificationMenuAnchor(null);
  };

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`https://speedocare.pythonanywhere.com/speedocare/notifications/user/${user}`);
      setNotifications(response.data);
    } catch (error) {
      console.error('Failed to fetch notifications:', error.message);
    }
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleViewProfile = () => {
    // Navigate to the ProfilePage and pass token as state
    navigate('/profile', { state: { token, user } });
  };

  const handleViewAppointment = () => {
    // Navigate to the ProfilePage and pass token as state
    navigate('/appointment', { state: { token, user } });
  };

  const handleButtonClick = () => {
    navigate('/booking', { state: { token, user } });
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
          })
          .catch((error) => {
            console.error('Failed to fetch clinic info:', error.message);
          });
      } catch (error) {
        console.error('Failed to fetch clinic info:', error.message);
      }
    }
  };

  const handleNotificationMenuOpen = (event) => {
    setNotificationMenuAnchor(event.currentTarget);
    // Fetch notifications when the menu opens
    fetchNotifications();
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

      // Navigate to the login page after logout
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#0a7557' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logo} alt="Brand Logo" style={{ marginRight: '10px', height: '30px' }} />
            Clinic Reservation
          </Typography>
          <Box>
            <Button style={{ color: 'white', marginRight: '20px' }}>
              Home
            </Button>
            <Button component={Link} to="/about" style={{ color: 'white', marginRight: '20px' }}>
              About
            </Button>
            <Button component={Link} to="/services" style={{ color: 'white', marginRight: '20px' }}>
              Our Services
            </Button>
            <Button component={Link} to="/blog" style={{ color: 'white', marginRight: '20px' }}>
              Blog
            </Button>
            <Button component={Link} to="/contact" style={{ color: 'white', marginRight: '20px' }}>
              Contact
            </Button>
            <Button component={Link} to="/faq" style={{ color: 'white', marginRight: '20px' }}>
              FAQs
            </Button>
          </Box>
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
          <div
            onMouseEnter={handleNotificationMenuOpen}
            onMouseLeave={handleNotificationMenuClose}
          >
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Menu
              anchorEl={notificationMenuAnchor}
              open={Boolean(notificationMenuAnchor)}
              onClose={handleNotificationMenuClose}
            >
              {notifications.map((notification) => (
                <MenuItem key={notification.notification_id}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                      <Typography variant="body2">{notification.subject}</Typography>
                      <Typography variant="caption">{notification.notification_date}</Typography>
                    </div>
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </div>
          {/* Profile Icon */}
          <IconButton color="inherit" onClick={handleProfileMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
            <MenuItem onClick={handleViewAppointment}>View Appointments</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', backgroundColor: '#ffffff' }}>
              <Typography variant="h5">Welcome to SpeedoCare</Typography>
              <Typography variant="body1">
                We offer people to easily connect with experts for primary care services, diagnosis and treatment of diseases
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <img src={dashboardImage} alt="Dashboard" style={{ width: '100%', objectFit: 'cover' }} />
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
              <Typography variant="h6" style={{ color: '#0a7557' }}>
                RESOURCES
              </Typography>
              <ul>
                <li>Company & News</li>
                <li component={Link} to="/faq"  style={{ color: '#0a7557', textDecoration: 'none' }}> 
                    FAQs
                </li>
                <li>API Support Request</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" style={{ color: '#0a7557' }}>
                OUR REVIEWS
              </Typography>
              <ul>
                <li>Capterra</li>
                <li>G2</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" style={{ color: '#0a7557' }}>
                ABOUT US
              </Typography>
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
                <Facebook fontSize="small" style={{ marginRight: '8px', color: '#0a7557' }} />
                <Twitter fontSize="small" style={{ marginRight: '8px', color: '#0a7557' }} />
                <Instagram fontSize="small" style={{ marginRight: '8px', color: '#0a7557' }} />
                <LinkedIn fontSize="small" style={{ marginRight: '8px', color: '#0a7557' }} />
                <YouTube fontSize="small" style={{ color: '#0a7557' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default DashboardPage;
