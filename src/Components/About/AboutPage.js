import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import backgroundImg from '../../Assets/sc-background.png'; // Import the background image

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
      <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
          <Paper elevation={3} style={{ padding: '40px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" style={{ color: '#0ea47a', marginBottom: '20px' }}>
              About SpeedoCare
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" style={{ marginBottom: '20px' }}>
                  SpeedoCare is a cutting-edge clinic reservation platform designed to make booking medical appointments
                  quick and hassle-free. Our mission is to connect patients with the right medical professionals while
                  providing a seamless experience throughout the reservation process.
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '20px' }}>
                  With SpeedoCare, you can easily find available clinics and doctors in your area, view their specialties,
                  and book appointments that suit your schedule. Say goodbye to long waiting times and endless phone calls.
                </Typography>
                <Typography variant="body1">
                  Our user-friendly interface, extensive network of healthcare providers, and commitment to patient privacy
                  make SpeedoCare the ideal platform for all your medical appointment needs.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
      <footer style={{ backgroundColor: '#f7f7f7', padding: '20px', marginTop: '20px' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" style={{ color: '#0a7557' }}>
                RESOURCES
              </Typography>
              <ul>
                <li>Company & News</li>
                <li>
                  <a href="/faq" style={{ color: '#0a7557', textDecoration: 'none' }}>
                    FAQs
                  </a>
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
};

export default AboutPage;
