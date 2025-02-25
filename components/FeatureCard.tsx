import type React from "react"
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material"

interface FeatureCardProps {
  title: string
  description: string
  imageUrl: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button size="small" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

export default FeatureCard

