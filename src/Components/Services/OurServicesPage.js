import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import dashboardImage from '../../Assets/sc-background-1.png';
import backgroundImg from '../../Assets/sc-background.png'; // Import the background image


const OurServicesPage = () => {
  const services = [
    {
      title: 'General Medical Consultation',
      description:
        'Our platform connects you with experienced doctors for general medical consultations, enabling you to receive professional medical advice from the comfort of your home.',
    },
    {
      title: 'Specialized Medical Services',
      description:
        'Need a specialized consultation? We provide access to a wide range of medical specialists, from cardiologists to dermatologists, ensuring you get the care you need from experts in their fields.',
    },
    {
      title: 'Telehealth Services',
      description:
        'With our telehealth services, you can schedule virtual appointments with doctors, avoiding the need to travel to a physical clinic. Get medical guidance and prescriptions through video consultations.',
    },
    {
      title: 'Prescription Refills',
      description:
        "Running out of your prescription medications? Our platform allows you to request prescription refills online, making it convenient to manage your medications and health.",
    },
    // Add more services here
  ];

  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
          <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
        <Paper elevation={3} style={{ padding: '40px', backgroundColor: '#ffffff' }}>
          <Typography variant="h4" style={{ color: '#0ea47a', marginBottom: '20px' }}>
            Our Services
          </Typography>
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <img src={dashboardImage} alt="Dashboard" style={{ width: '100%', objectFit: 'cover' }} />
        </Grid>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Typography variant="h6" style={{ color: '#0a7557' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '20px' }}>
                  {service.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
      </div>
    </div>
  );
};

export default OurServicesPage;
