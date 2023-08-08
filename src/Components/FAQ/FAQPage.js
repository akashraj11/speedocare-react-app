import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'How do I book an appointment?',
    answer:
      "Booking an appointment is easy! Simply log in to your account, navigate to the 'Appointments' page, and select your preferred date and time. Click on the 'Book Appointment' button, and you're all set!",
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes, you can reschedule or cancel your appointment. Log in to your account, go to the "Appointments" page, find the appointment you want to modify, and click on the "Reschedule" or "Cancel" button.',
  },
  {
    question: 'How far in advance can I book an appointment?',
    answer:
      'You can book appointments up to 30 days in advance. If you need to schedule an appointment beyond that timeframe, please contact our support team for assistance.',
  },
  {
    question: 'Is my personal information secure?',
    answer:
      'Yes, your privacy and security are our top priorities. We use industry-standard encryption to protect your personal information, and we adhere to strict data protection policies.',
  },
  {
    question: 'What should I do if I experience technical issues?',
    answer:
      'If you encounter any technical issues while using our platform, please reach out to our support team at support@exampleclinic.com, and we will assist you promptly.',
  },
];

function FAQPage() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', color: '#0a7557' }}>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: '#e6e6e6' }}> {/* Light gray background */}
            <Typography variant="h6" style={{ color: '#2bedb7' }}>{faq.question}</Typography> {/* Mint green color */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default FAQPage;
