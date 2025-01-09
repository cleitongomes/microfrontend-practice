import { Box, Grid2 } from "@mui/material";
import WelcomeCard from "../components/cards/welcome-card";
import VeihclesCard from "../components/cards/veihcles-card";
import ServicesCard from "../components/cards/services-card";
import MaintenanceHistoryCard from "../components/cards/maintenance-history-card";
import ExpenseCard from "../components/cards/expense-card";

export default function Dashboard() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"1300px"}
      margin={"0 auto"}
      padding={"15px 0"}
    >
      <WelcomeCard />
      <Box sx={{ flexGrow: 1, paddingTop: "15px" }}>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <VeihclesCard />
              </Grid2>
              <Grid2 size={6}>
                <MaintenanceHistoryCard />
              </Grid2>
              <Grid2 size={12}>
                <ExpenseCard />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={4}>
            <Grid2 size={12}>
              <ServicesCard />
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
