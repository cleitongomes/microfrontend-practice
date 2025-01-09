import { Box, Card, CardContent, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ExpenseCard() {
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
        <CurrencyExchangeIcon sx={{ fontSize: "40px" }} />
        <Typography sx={{ fontSize: "20px", padding: "10px 0" }}>
          Expenses
        </Typography>
        <Box>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            series={[
              {
                data: [
                  12000, 13000, 9000, 8500, 11800, 30000, 20000, 35000, 24000,
                  17000, 35000, 22000,
                ],
              },
            ]}
            width={500}
            height={300}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
