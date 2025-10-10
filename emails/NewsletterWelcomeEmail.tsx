import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface NewsletterWelcomeEmailProps {
  email: string;
}

export default function NewsletterWelcomeEmail({ email }: NewsletterWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Hestia Site Solutions Newsletter</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>🧹 Welcome to Hestia Site Solutions!</Heading>
            <Text style={headerSubtitle}>Professional Cleaning Services</Text>
          </Section>

          <Section style={content}>
            <Heading style={h2}>Thank you for subscribing!</Heading>
            <Text style={paragraph}>
              We're excited to have you join our community. You'll now receive updates about:
            </Text>

            <Section style={features}>
              <Text style={featureItem}>
                ✓ <strong>Latest Cleaning Standards</strong> - Industry best practices and innovations
              </Text>
              <Text style={featureItem}>
                ✓ <strong>Safety Protocols</strong> - OSHA compliance updates and safety tips
              </Text>
              <Text style={featureItem}>
                ✓ <strong>Special Offers</strong> - Exclusive deals for our subscribers
              </Text>
              <Text style={featureItem}>
                ✓ <strong>Service Updates</strong> - New services and expanded coverage areas
              </Text>
            </Section>

            <Text style={paragraph}>
              Our OSHA-compliant crews are ready to deliver inspection-ready spaces with
              48-hour mobilization across the Greater Houston Area.
            </Text>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href="https://hestia-site-solutions.com/cleaning"
              >
                Explore Our Services
              </Button>
            </Section>

            <Text style={contactInfo}>
              Need immediate assistance? Call us at <strong>+1 (832) 205-8943</strong> or
              email <Link href="mailto:info@hestiasitesolutions.com" style={link}>info@hestiasitesolutions.com</Link>
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              <strong>Hestia Site Solutions</strong>
              <br />
              Professional Cleaning Services
              <br />
              Serving Houston, Katy, Sugar Land, The Woodlands & Cypress
            </Text>
            <Text style={footerLinks}>
              <Link href="https://hestia-site-solutions.com/cleaning" style={link}>Visit our website</Link>
              {' | '}
              <Link href="mailto:info@hestiasitesolutions.com" style={link}>Contact us</Link>
            </Text>
            <Text style={footerDisclaimer}>
              You're receiving this email because you subscribed to our newsletter.
              <br />
              If you'd like to unsubscribe, please reply to this email.
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
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  padding: '40px 30px',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
};

const headerSubtitle = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0',
  opacity: '0.9',
};

const content = {
  padding: '40px 30px',
};

const h2 = {
  color: '#1f2937',
  fontSize: '22px',
  marginBottom: '15px',
};

const paragraph = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const features = {
  backgroundColor: '#fef3c7',
  borderLeft: '4px solid #fbbf24',
  padding: '20px',
  margin: '25px 0',
  borderRadius: '4px',
};

const featureItem = {
  color: '#1f2937',
  fontSize: '15px',
  marginBottom: '8px',
  lineHeight: '1.5',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#fbbf24',
  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  color: '#1f2937',
  padding: '14px 32px',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  boxShadow: '0 4px 6px rgba(251, 191, 36, 0.3)',
};

const contactInfo = {
  color: '#6b7280',
  fontSize: '14px',
  marginTop: '30px',
  textAlign: 'center' as const,
};

const footer = {
  backgroundColor: '#f9fafb',
  padding: '30px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0 0 15px 0',
};

const footerLinks = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '15px 0',
};

const footerDisclaimer = {
  color: '#9ca3af',
  fontSize: '12px',
  margin: '15px 0 0 0',
};

const link = {
  color: '#f59e0b',
  textDecoration: 'none',
};

