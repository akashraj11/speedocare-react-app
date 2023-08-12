import React from 'react';
import { Container, Typography, Paper, Grid, TextField, Button } from '@mui/material';
import backgroundImg from '../../Assets/sc-background.png'; // Import the background image

const ContactUsPage = () => {
  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
      <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
          <Paper elevation={3} style={{ padding: '40px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" style={{ color: '#0ea47a', marginBottom: '20px' }}>
              Contact Us
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ marginBottom: '20px' }}>
                  Have a question or feedback for us? Feel free to get in touch using the form below, and we'll get back
                  to you as soon as possible.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: '#12d39d', color: 'white' }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsPage;
