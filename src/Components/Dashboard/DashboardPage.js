// DashboardPage.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

function DashboardPage() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Add your logo here */}
          <Typography variant="h6">Clinic Reservation</Typography>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/appointments">
            Appointments
          </Button>
          <Button color="inherit" component={Link} to="/patients">
            Patients
          </Button>
          {/* Add more menu items as needed */}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {/* Replace this with your dashboard content */}
          <Grid item xs={12}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h5">Welcome to the Dashboard</Typography>
              <Typography variant="body1">
                This is the main content of your dashboard.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

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
                <li>DSOs</li>
                <li>FAQs</li>
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
              {/* <img
                src="newspaper.svg"
                alt="Newspaper"
                style={{ height: '30px', marginRight: '10px' }}
              /> */}
              <Typography variant="body2">Copyright © 2023. Made in SF, California</Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box display="flex" alignItems="center">
                <Facebook fontSize="small" style={{ marginRight: '8px' }} />
                <Twitter fontSize="small" style={{ marginRight: '8px' }} />
                <Instagram fontSize="small" style={{ marginRight: '8px' }} />
                <LinkedIn fontSize="small" style={{ marginRight: '8px' }} />
                <YouTube fontSize="small" />
              </Box>
              <Button
                variant="text"
                color="inherit"
                component="a"
                href="tel:+1"
                style={{ marginLeft: '10px' }}
              >
                (866) 123-1838
              </Button>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default DashboardPage;
