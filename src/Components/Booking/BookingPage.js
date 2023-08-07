import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const clinics = ['Clinic A', 'Clinic B', 'Clinic C'];
const diseases = ['Cold', 'Fever', 'Headache'];
const doctors = ['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Michael Johnson'];

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleBooking = () => {
    // Handle the booking process here, e.g., send the selected details to the server
    console.log('Booking details:', {
      date: selectedDate,
      clinic: selectedClinic,
      disease: selectedDisease,
      doctor: selectedDoctor,
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#ffffff' }}>
        <Typography variant="h5" style={{ color: '#0a7557' }}>
          Book Clinic Reservation
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Select Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="clinic-label" style={{ color: '#0a7557' }}>
                Select Clinic
              </InputLabel>
              <Select
                labelId="clinic-label"
                value={selectedClinic}
                onChange={(e) => setSelectedClinic(e.target.value)}
              >
                {clinics.map((clinic) => (
                  <MenuItem key={clinic} value={clinic}>
                    {clinic}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="disease-label" style={{ color: '#0a7557' }}>
                Select Disease
              </InputLabel>
              <Select
                labelId="disease-label"
                value={selectedDisease}
                onChange={(e) => setSelectedDisease(e.target.value)}
              >
                {diseases.map((disease) => (
                  <MenuItem key={disease} value={disease}>
                    {disease}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="doctor-label" style={{ color: '#0a7557' }}>
                Select Doctor (Optional)
              </InputLabel>
              <Select
                labelId="doctor-label"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                {doctors.map((doctor) => (
                  <MenuItem key={doctor} value={doctor}>
                    {doctor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBooking}
              style={{ backgroundColor: '#12d39d', color: '#ffffff' }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default BookingPage;
