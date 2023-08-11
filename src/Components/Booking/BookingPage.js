import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  Snackbar,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedClinicId, setSelectedClinicId] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [selectedDoctorIdPost, setSelectedDoctorIdPost] = useState('');
  const [selectedComment, setSelectedComment] = useState('');
  const [clinicOptions, setClinicOptions] = useState([]);
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();
  const diseaseOptions = [
    'Cold',
    'Fever',
    'Headache',
    'Pediatrics',
    'Skin',
    'Cardiology',
    'Hypertension',
    'Allergies',
    'Diabetes',
    'Dermatitis',
    'Asthma',
    'Gastroenteritis',
  ];

  const location = useLocation();
  const { state } = location;
  const token = state.token;
  const user = state.user;


  useEffect(() => {
    fetchClinicOptions();
    fetchDoctorOptions();
  }, []);

  const fetchClinicOptions = async () => {
    try {
      const response = await axios.get('http://speedocare.pythonanywhere.com/speedocare/clinics');
      setClinicOptions(response.data);
    } catch (error) {
      console.error('Failed to fetch clinic options:', error.message);
    }
  };

  const selectAndSetDoctorId = async (id) => {
    setSelectedDoctorId(id);
    try {
      const response = await axios.get(`http://speedocare.pythonanywhere.com/speedocare/users/${id}`);
      setSelectedDoctorIdPost(response.data.doctor.doctor_id);
    } catch (error) {
      console.error('Failed to fetch doctor options:', error.message);
    }
  };

  const fetchDoctorOptions = async () => {
    try {
      const response = await axios.get('http://speedocare.pythonanywhere.com/speedocare/users/search?user_role=Doctor');
      setDoctorOptions(response.data);
    } catch (error) {
      console.error('Failed to fetch doctor options:', error.message);
    }
  };

  const handleBooking = async () => {
    try {
      const appointmentId = Math.floor(Math.random() * 1000);
      let price = 0;

      if (selectedDisease === 'Cold' || selectedDisease === 'Fever') {
        price = 50;
      } else if (selectedDisease === 'Cardiology' || selectedDisease === 'Pediatrics') {
        price = 80;
      } else if (selectedDisease === 'Diabetes' || selectedDisease === 'Asthma') {
        price = 70;
      }
      await axios.post('http://speedocare.pythonanywhere.com/speedocare/appointments', {
        appointment_id: appointmentId,
        patient_id: user,
        doctor_id: selectedDoctorIdPost,
        clinic_id: selectedClinicId,
        booking_date: selectedDate,
        booking_information: selectedDisease,
        comment: selectedComment,
        price: price,
        status: 'confirmed',
        follow_up_req: '',
      });

      setSnackbarMessage('Appointment booked successfully!');
      setSnackbarOpen(true);
      setSelectedDate('');
      setSelectedClinicId('');
      setSelectedDisease('');
      setSelectedDoctorId('');
      setSelectedDoctorIdPost('');
      setSelectedComment('');
    } catch (error) {
      console.error('Failed to book appointment:', error.message);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard', { state: { token, user } });
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
                value={selectedClinicId}
                onChange={(e) => setSelectedClinicId(e.target.value)}
              >
                {clinicOptions.map((clinic) => (
                  <MenuItem key={clinic.clinic_id} value={clinic.clinic_id}>
                    {clinic.clinic_name}
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
                {diseaseOptions.map((disease) => (
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
                Select Doctor
              </InputLabel>
              <Select
                labelId="doctor-label"
                value={selectedDoctorId}
                onChange={(e) => selectAndSetDoctorId(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                {doctorOptions.map((doctor) => (
                  <MenuItem key={doctor.user_id} value={doctor.user_id}>
                    {doctor.first_name + ' ' + doctor.last_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Comments"
              multiline
              rows={4}
              value={selectedComment}
              onChange={(e) => setSelectedComment(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBooking}
              style={{ backgroundColor: '#12d39d', color: '#ffffff', marginRight: '10px' }}
            >
              Book Now
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGoToDashboard}
              style={{ backgroundColor: '#ff6b6b', color: '#ffffff' }}
            >
              Go to Dashboard
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      />
    </Container>
  );
}

export default BookingPage;
