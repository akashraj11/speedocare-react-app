import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import backgroundImg from '../../Assets/sc-background.png'; // Import the background image


const BlogPage = () => {
    const blogPosts = [
        {
            title: 'The Importance of Regular Checkups',
            content:
                'Regular medical checkups are essential for maintaining good health. They allow healthcare professionals to detect potential health issues...',
        },
        {
            title: 'Telehealth: The Future of Healthcare',
            content:
                'Telehealth services are revolutionizing the healthcare industry by providing remote medical consultations. This technology has become even more significant...',
        },
        {
            title: 'Healthy Living Tips for a Busy Lifestyle',
            content:
                'Living a healthy life doesn’t have to be a daunting task, even with a busy schedule. Here are some tips to help you maintain a healthy lifestyle...',
        },
        {
            title: 'Mental Health Matters: Breaking the Stigma',
            content:
                'Mental health is a crucial aspect of overall well-being. Yet, there is often a stigma surrounding mental health issues. It’s essential to understand...',
        },
        {
            title: 'Nutrition 101: Eating for Optimal Health',
            content:
                'Proper nutrition plays a vital role in maintaining good health and preventing chronic diseases. A balanced diet rich in essential nutrients...',
        },
        // Add more blog posts here
    ];

    return (
        <div style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
            <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
                <Container maxWidth="lg" style={{ paddingTop: '40px' }}>
                    <Paper elevation={3} style={{ padding: '40px', backgroundColor: '#ffffff' }}>
                        <Typography variant="h4" style={{ color: '#0ea47a', marginBottom: '20px' }}>
                            Blog
                        </Typography>
                        <Grid container spacing={3}>
                            {blogPosts.map((post, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography variant="h6" style={{ color: '#0a7557' }}>
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" style={{ marginTop: '10px' }}>
                                                {post.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Container>
            </div>
        </div>
    );
};

export default BlogPage;
