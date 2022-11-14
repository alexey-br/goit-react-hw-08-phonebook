import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h2"
        component="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Best contacts storing APP 👌
      </Typography>
    </Container>
  );
}
