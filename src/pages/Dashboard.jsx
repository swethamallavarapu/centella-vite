import { Card, CardContent } from "@mui/material";
import Sidebar from "../components/Auth/Sidebar";
import Topbar from "../components/Auth/Topbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../assets/css/Dashboard.css";
const Dashboard = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="card">
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Predictions
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Under Trails
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Completed/Approved
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Dashboard;
