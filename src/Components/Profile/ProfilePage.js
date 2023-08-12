import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, List, Divider, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import backgroundImg from '../../Assets/sc-background.png'; // Import the background image


const ProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const location = useLocation();
  const { state } = location;
  const user = state.user;

  useEffect(() => {
    // Fetch user profile information
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://speedocare.pythonanywhere.com/speedocare/users/${user}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error.message);
      }
    };

    fetchProfile();
  }, [user]);

  return (
    <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh', padding: '20px 0' }}>
      <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" style={{ color: '#0ea47a', marginBottom: '20px' }}>
              My Profile
            </Typography>
            <List>
              <Paper elevation={1} style={{ marginBottom: '20px' }}>
                <Box p={2}>
                  <Typography variant="h6">Username: {profileData.username}</Typography>
                  <Typography variant="body2">First Name: {profileData.first_name}</Typography>
                  <Typography variant="body2">Last Name: {profileData.last_name}</Typography>
                  <Divider style={{ margin: '10px 0' }} />
                  <Typography variant="body2">User ID: {profileData.user_id}</Typography>
                  <Typography variant="body2">User Role: {profileData.user_role}</Typography>
                  <Divider style={{ margin: '10px 0' }} />
                  <Typography variant="body2">Email: {profileData.email}</Typography>
                  <Typography variant="body2">Contact Number: {profileData.contact_no}</Typography>
                  <Typography variant="body2">Date of Birth: {profileData.date_of_birth}</Typography>
                  <Divider style={{ margin: '10px 0' }} />
                  <Typography variant="body2">Address: {profileData.address}</Typography>
                </Box>
              </Paper>
            </List>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ProfilePage;
