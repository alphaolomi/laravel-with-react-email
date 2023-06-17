import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';

  interface KoalaWelcomeEmailProps {
    name: string;
  }

//   const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : '';

  export const KoalaWelcomeEmail = ({
    name = 'Irene',
  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        SafariWallet, travel all round the world with ease
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            // src={`${baseUrl}/static/koala-logo.png`}
            src={"https://safariwallet.com/logo_icon.png"}
            width="90"
            height="90"
            alt="Safari Wallet Logo"
            style={logo}
          />
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Welcome to SafariWallet, the best way to travel all round the world with ease.

            <br />

            Book your flights, hotels, and car rentals with SafariWallet and get the best deals on your next trip.
          </Text>
          <Section style={btnContainer}>
            <Button pX={12} pY={12} style={button} href="https://safariwallet.com">
              Login
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The SafariWallet team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Tan House - 9th Floor, Victoria - old Bagamoyo, Dar es salaam.</Text>
        </Container>
      </Body>
    </Html>
  );

  export default KoalaWelcomeEmail;

  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };

  const logo = {
    margin: '0 auto',
  };

  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };

  const btnContainer = {
    textAlign: 'center' as const,
  };

  const button = {
    backgroundColor: 'orange',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
  };

  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };

  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };
