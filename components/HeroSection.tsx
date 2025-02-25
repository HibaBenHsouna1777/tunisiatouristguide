import type React from "react"
import { Box, Typography, Button, Container } from "@mui/material"

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/hero-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Discover the Beauty of Tunisia
        </Typography>
        <Typography variant="h5" paragraph>
          Explore ancient ruins, pristine beaches, and vibrant culture with our comprehensive guide.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  )
}

export default HeroSection

