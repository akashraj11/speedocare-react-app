import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
} from '@mui/material';

function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const location = useLocation();
  const { state } = location;
  const token = state.token;

  useEffect(() => {
    // Fetch user profile data when the component mounts
    console.log('token')
    console.log(token)
    fetchUserProfile();

  });

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('https://speedocare.pythonanywhere.com/speedocare/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Profile Response:', response.data);
      setProfileData(response.data);
    } catch (error) {
      console.error('Failed to fetch user profile:', error.message);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h5">Your Profile</Typography>
      {profileData && (
        <div>
          <p>First Name: {profileData.first_name}</p>
          <p>Last Name: {profileData.last_name}</p>
          <p>Email: {profileData.email}</p>
          <p>Contact Number: {profileData.contact_no}</p>
          <p>Address: {profileData.address}</p>
          <p>Date of Birth: {profileData.date_of_birth}</p>
          <p>Username: {profileData.username}</p>
          <p>User Role: {profileData.user_role}</p>
        </div>
      )}
    </Container>
  );
}

export default ProfilePage;
