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
import SettingsIcon from "@mui/icons-material/Settings";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

export default function ServicesCard() {
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
        <SettingsIcon sx={{ fontSize: "40px" }} />
        <Typography sx={{ fontSize: "20px", padding: "5px 0" }}>
          Services
        </Typography>
        <List sx={{ width: "100%", background: "#f6f6fd" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Oil and filter change" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Wheel alignment and balancing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Brake pad replacement" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Timing belt and tensioner replacement" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Spark plug and ignition wire replacement" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Cooling system maintenance" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Suspension inspection" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Air and fuel filter replacement" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Electrical system diagnosis and repair" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Steering system inspection and maintenance" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Battery inspection and replacement" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Tire rotation and inspection" />
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
