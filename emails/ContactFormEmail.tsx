import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  projectType?: string;
  location?: string;
  timeline?: string;
  squareFootage?: string;
  details?: string;
}

export default function ContactFormEmail({
  fullName,
  email,
  phone,
  company,
  projectType,
  location,
  timeline,
  squareFootage,
  details,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission - {projectType || 'General Inquiry'}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>🧹 New Contact Form Submission</Heading>
            <Text style={headerSubtitle}>Hestia Site Solutions - Cleaning Services</Text>
          </Section>

          <Section style={content}>
            {projectType && (
              <Section style={highlight}>
                <Text style={highlightText}>
                  <strong>Project Type:</strong> {projectType}
                </Text>
              </Section>
            )}

            <Section style={field}>
              <Text style={label}>CONTACT INFORMATION</Text>
              <Text style={value}>
                <strong>Name:</strong> {fullName}
                <br />
                <strong>Email:</strong> {email}
                <br />
                <strong>Phone:</strong> {phone}
                {company && (
                  <>
                    <br />
                    <strong>Company:</strong> {company}
                  </>
                )}
              </Text>
            </Section>

            {location && (
              <Section style={field}>
                <Text style={label}>LOCATION</Text>
                <Text style={value}>{location}</Text>
              </Section>
            )}

            {timeline && (
              <Section style={field}>
                <Text style={label}>TIMELINE</Text>
                <Text style={value}>{timeline}</Text>
              </Section>
            )}

            {squareFootage && (
              <Section style={field}>
                <Text style={label}>SQUARE FOOTAGE</Text>
                <Text style={value}>{squareFootage} sq ft</Text>
              </Section>
            )}

            {details && (
              <Section style={field}>
                <Text style={label}>PROJECT DETAILS</Text>
                <Text style={value}>{details}</Text>
              </Section>
            )}

            <Hr style={separator} />

            <Text style={footer}>
              This email was sent from the Hestia Site Solutions contact form.
              <br />
              Received on {new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'America/Chicago'
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f9fafb',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  overflow: 'hidden',
};

const header = {
  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  padding: '30px',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
};

const headerSubtitle = {
  color: '#1f2937',
  fontSize: '14px',
  margin: '0',
  opacity: '0.9',
};

const content = {
  padding: '30px',
};

const highlight = {
  backgroundColor: '#fef3c7',
  borderLeft: '4px solid #fbbf24',
  padding: '15px',
  margin: '20px 0',
  borderRadius: '4px',
};

const highlightText = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0',
};

const field = {
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '1px solid #f3f4f6',
};

const label = {
  fontWeight: 'bold',
  color: '#1f2937',
  fontSize: '14px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 5px 0',
};

const value = {
  color: '#4b5563',
  fontSize: '16px',
  margin: '0',
  lineHeight: '1.6',
};

const separator = {
  borderColor: '#f3f4f6',
  margin: '30px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '30px',
};

