import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [userRole, setUserRole] = useState('Patient'); // Default role is Patient

  // Fields for Patient
  const [prescriptions, setPrescriptions] = useState('');
  const [details, setDetails] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  // Fields for Doctor
  const [clinicId, setClinicId] = useState('');
  const [specialization, setSpecialization] = useState('');

  // Fields for ClinicAdmin
  const [clinicInternalId, setClinicInternalId] = useState('');

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Create a user object based on the selected role
    const user = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      contact_no: contactNo,
      email: email,
      encrypted_password: password,
      address: address,
      date_of_birth: dateOfBirth,
      user_role: userRole,
    };

    // Add additional fields based on the selected role
    if (userRole === 'Patient') {
      user.patient = {
        prescriptions: prescriptions,
        details: details,
        medical_history: medicalHistory,
      };
    } else if (userRole === 'Doctor') {
      user.doctor = {
        clinic_id: clinicId,
        specialization: specialization,
      };
    } else if (userRole === 'ClinicAdmin') {
      user.clinic_admin = {
        clinic_internal_id: clinicInternalId,
        clinic_id: clinicId,
      };
    }

    try {
      // Make the POST request to register the user
      const response = await axios.post('https://speedocare.pythonanywhere.com/speedocare/users', user);

      console.log('New user registered:', response.data);
      navigate('/login');
      // Handle success or navigate to a success page
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle error or display an error message to the user
    }
  };

  return (
    <div style={{ backgroundColor: '#0a7557', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Box mt={5} textAlign="center">
          <Typography variant="h4" gutterBottom style={{ color: '#0a7557' }}>
            Register
          </Typography>
          <form onSubmit={handleRegistration}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="Contact No."
              variant="outlined"
              fullWidth
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
              required
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <TextField
              label="Date of Birth"
              variant="outlined"
              fullWidth
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              margin="normal"
              required
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
            />
            <FormControl variant="outlined" fullWidth margin="normal" required>
              <InputLabel>User Role</InputLabel>
              <Select
                label="User Role"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
              >
                <MenuItem value="Patient">Patient</MenuItem>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="ClinicAdmin">Clinic Admin</MenuItem>
              </Select>
            </FormControl>

            {/* Show fields based on the selected user role */}
            {userRole === 'Patient' && (
              <div>
                <TextField
                  label="Prescriptions"
                  variant="outlined"
                  fullWidth
                  value={prescriptions}
                  onChange={(e) => setPrescriptions(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
                <TextField
                  label="Details"
                  variant="outlined"
                  fullWidth
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
                <TextField
                  label="Medical History"
                  variant="outlined"
                  fullWidth
                  value={medicalHistory}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
              </div>
            )}

            {userRole === 'Doctor' && (
              <div>
                <TextField
                  label="Clinic ID"
                  variant="outlined"
                  fullWidth
                  value={clinicId}
                  onChange={(e) => setClinicId(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
                <TextField
                  label="Specialization"
                  variant="outlined"
                  fullWidth
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
              </div>
            )}

            {userRole === 'ClinicAdmin' && (
              <div>
                <TextField
                  label="Clinic Internal ID"
                  variant="outlined"
                  fullWidth
                  value={clinicInternalId}
                  onChange={(e) => setClinicInternalId(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
                <TextField
                  label="Clinic ID"
                  variant="outlined"
                  fullWidth
                  value={clinicId}
                  onChange={(e) => setClinicId(e.target.value)}
                  margin="normal"
                  inputProps={{ style: { backgroundColor: '#e6e6e6' } }} /* Light gray background */
                />
              </div>
            )}

            <Button type="submit" variant="contained" style={{ backgroundColor: '#12d39d', color: 'white', marginTop: '20px' }}>
              Register
            </Button>
          </form>
          <Box mt={2}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#0a7557', textDecoration: 'none' }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterPage;
