import { Box, Card, CardContent, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function WelcomeCard() {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px 0 60px",
          background: "linear-gradient(to right, #f1f1ff, #ababca)",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="h2"
            sx={{ color: "text.secondary", fontSize: "30px" }}
          >
            Welcome, User
          </Typography>
          <Typography>Manage all your car services in one place</Typography>
        </Box>
        <Box>
          <DirectionsCarIcon
            sx={{
              fontSize: "180px",
              transform: "rotate(-20deg)",
              opacity: 0.6,
              color: "#fff",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
