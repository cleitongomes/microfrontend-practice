import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function VeihclesCard() {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f1f1ff",
        }}
      >
        <CarRentalIcon sx={{ fontSize: "40px" }} />
        <Typography sx={{ fontSize: "20px", padding: "10px 0" }}>
          Veihcles
        </Typography>
        <List sx={{ width: "100%", background: "#f6f6fd" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary="Honda Civic" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary="Ford F-150" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary="Toyota Corolla" />
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
