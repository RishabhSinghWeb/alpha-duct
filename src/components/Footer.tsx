import { Box, Container, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

export function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ bgcolor: '#051B2E', color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 2 : 4} py={isMobile ? 4 : 8}>
          <Grid item xs={12} md={4}>
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>Alpha Duct Cleaning</Typography>
              <Typography variant="body2">
                Professional air duct cleaning services in Melbourne. 
                Committed to improving your indoor air quality.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>Contact Info</Typography>
              <Typography variant="body2">Phone: (03) 1234 5678</Typography>
              <Typography variant="body2">Email: info@alphaduct.com.au</Typography>
              <Typography variant="body2">
                Address: 123 Main Street, Melbourne VIC 3000
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>Business Hours</Typography>
              <Typography variant="body2">Monday - Friday: 8am - 6pm</Typography>
              <Typography variant="body2">Saturday: 9am - 4pm</Typography>
              <Typography variant="body2">Sunday: Closed</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack 
          direction="row" 
          justifyContent="center" 
          py={isMobile ? 1.5 : 2} 
          borderTop={1} 
          borderColor="primary.800"
        >
          <Typography variant="body2" color="primary.100">
            © 2024 Alpha Duct Cleaning. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
} 