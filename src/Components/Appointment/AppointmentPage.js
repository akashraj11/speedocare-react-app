import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, List, Divider, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import backgroundImg from '../../Assets/sc-background.png'; // Import the background image


const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);
    const location = useLocation();
    const { state } = location;
    const user = state.user;

    useEffect(() => {
        // Fetch booked appointment details for the user
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`https://speedocare.pythonanywhere.com/speedocare/appointments/patient/${user}`);
                setAppointments(response.data);
            } catch (error) {
                console.error('Failed to fetch appointments:', error.message);
            }
        };

        fetchAppointments();
    }, [user]);

    return (
        <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh', padding: '20px 0' }}>
            <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
                <Container maxWidth="md">
                    <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                        <Typography variant="h4" style={{ color: '#0ea47a', marginBottom: '20px' }}>
                            Appointments
                        </Typography>
                        {appointments.length === 0 ? (
                            <Typography variant="body1">You have no appointments booked.</Typography>
                        ) : (
                            <List>
                                {appointments.map((appointment) => (
                                    <Paper elevation={1} key={appointment.appointment_id} style={{ marginBottom: '20px' }}>
                                        <Box p={2}>
                                            <Typography variant="h6">Appointment ID: {appointment.appointment_id}</Typography>
                                            <Typography variant="body2">Booking Date: {appointment.booking_date}</Typography>
                                            <Typography variant="body2">Booking Information: {appointment.booking_information}</Typography>
                                            <Divider style={{ margin: '10px 0' }} />
                                            <Typography variant="body2">Doctor ID: {appointment.doctor_id}</Typography>
                                            <Typography variant="body2">Clinic ID: {appointment.clinic_id}</Typography>
                                            <Typography variant="body2">Status: {appointment.status}</Typography>
                                            <Divider style={{ margin: '10px 0' }} />
                                            <Typography variant="body2">Price: {appointment.price}</Typography>
                                            <Typography variant="body2">Follow-up Requirement: {appointment.follow_up_req}</Typography>
                                            {appointment.comment && (
                                                <>
                                                    <Divider style={{ margin: '10px 0' }} />
                                                    <Typography variant="body2">Comment: {appointment.comment}</Typography>
                                                </>
                                            )}
                                        </Box>
                                    </Paper>
                                ))}
                            </List>
                        )}
                    </Paper>
                </Container>
            </div>
        </div>
    );
};

export default AppointmentsPage;
