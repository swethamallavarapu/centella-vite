import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, List } from "@mui/material";

const drawerWidth = 90;

export default function Side() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <Divider />
          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>C</h1>{" "}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>N</h1>{" "}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>O</h1>{" "}
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>S</h1>{" "}
            </ListItemText>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>F</h1>{" "}
            </ListItemText>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>Cl</h1>{" "}
            </ListItemText>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemText>
              {" "}
              <h1>Br</h1>{" "}
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
