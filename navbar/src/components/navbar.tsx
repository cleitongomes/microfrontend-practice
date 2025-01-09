import MenuIcon from "@mui/icons-material/Menu";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#0000b7" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              <DirectionsCarIcon
                sx={{ fontSize: "30px", marginRight: "8px" }}
              />{" "}
              AutoFIX
            </Typography>
          </Typography>
          <Button color="inherit" onClick={() => (location.href = "/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
