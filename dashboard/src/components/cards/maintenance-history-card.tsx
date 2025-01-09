import { Box, Card, CardContent, Typography } from "@mui/material";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { PieChart } from "@mui/x-charts";

export default function MaintenanceHistoryCard() {
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
        <ManageHistoryIcon sx={{ fontSize: "40px" }} />
        <Typography sx={{ fontSize: "20px", padding: "10px 0" }}>
          Maintenance History
        </Typography>
        <Box sx={{ marginRight: "110px" }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 35, label: "Oil and filter" },
                  { id: 1, value: 30, label: "Brake pad" },
                  { id: 2, value: 20, label: "Suspension" },
                  { id: 3, value: 25, label: "Others" },
                ],
              },
            ]}
            width={450}
            height={160}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
