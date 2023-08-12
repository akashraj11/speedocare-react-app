import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useParams } from 'react-router-dom';

function ClinicDetailsPage() {
  const { clinicId } = useParams();
  const [clinicDetails, setClinicDetails] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [clinicReviews, setClinicReviews] = useState([]);

  useEffect(() => {
    fetchClinicDetails(); // eslint-disable-next-line 
    fetchDoctors(); // eslint-disable-next-line 
    fetchClinicReviews(); // eslint-disable-next-line 
  }, [clinicId]); // Add clinicId to the dependency array


  const fetchClinicDetails = async () => {
    try {
      const response = await axios.get(`https://speedocare.pythonanywhere.com/speedocare/clinics/${clinicId}`);
      setClinicDetails(response.data);
    } catch (error) {
      console.error('Failed to fetch clinic details:', error.message);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`https://speedocare.pythonanywhere.com/speedocare/users/doctors/clinic/${clinicId}`);
      setDoctors(response.data);
    } catch (error) {
      console.error('Failed to fetch the doctors:', error.message);
    }
  };

  const fetchClinicReviews = async () => {
    try {
      const response = await axios.get(
        `https://speedocare.pythonanywhere.com/speedocare/reviews/clinic/${clinicId}`
      );
      setClinicReviews(response.data);
    } catch (error) {
      console.error('Failed to fetch clinic reviews:', error.message);
    }
  };

  return (
    <div style={{ backgroundColor:'#0a7557' , backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h5" >Clinic Details</Typography>
        {clinicDetails && (
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#ffffff' }}>
            <Typography variant="body1" style={{ color: '#0a7557' }}>Clinic ID: {clinicDetails.clinic_id}</Typography>
            <Typography variant="body1" style={{ color: '#0a7557' }}>Clinic Name: {clinicDetails.clinic_name}</Typography>
            <Typography variant="body1" style={{ color: '#0a7557' }}>Description: {clinicDetails.description}</Typography>
            <Typography variant="body1" style={{ color: '#0a7557' }}>Location: {clinicDetails.location}</Typography>
          </Paper>
        )}

        <Typography variant="h5" style={{ marginTop: '20px' }}>Doctors</Typography>
        {doctors.length > 0 && (
          <List style={{ marginTop: '10px' }}>
            {doctors.map((doctor) => (
              <ListItem key={doctor.user_id} style={{ backgroundColor: '#ffffff', marginBottom: '10px', border: '1px solid #e6e6e6' }}>
                <ListItemText
                  primary={`${doctor.first_name} ${doctor.last_name}`}
                  secondary={`Specialization: ${doctor.doctor.specialization}`}
                />
              </ListItem>
            ))}
          </List>
        )}

      <Typography variant="h5" style={{ marginTop: '20px' }}>Reviews</Typography>
        {clinicReviews.length > 0 && (
          <List style={{ marginTop: '10px' }}>
            {clinicReviews.map((review, index) => (
              <ListItem key={index} style={{ backgroundColor: '#ffffff', marginBottom: '10px', border: '1px solid #e6e6e6' }}>
                <ListItemText
                  primary={`Rating: ${review.rating}`}
                  secondary={review.review_text}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </div>
  );
}

export default ClinicDetailsPage;
