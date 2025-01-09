import { Box, Button, TextField, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function Login() {
  return (
    <Box display={"flex"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0000b7",
          height: "100vh",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            fontSize: "70px",
          }}
        >
          <DirectionsCarIcon sx={{ fontSize: "70px", marginRight: "15px" }} />{" "}
          AutoFIX
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "50%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "30vh",
            width: "40%",
          }}
        >
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Log in to your account
          </Typography>
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            onClick={() => (location.href = "/dashboard")}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
