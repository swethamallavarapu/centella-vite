import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

function Opt() {
  return (
    <Paper variant="contained" style={{ padding: "300px" }}>
      <Box
        sx={{
          width: 200,
          height: 180,
          backgroundColor: "primary.main",
          border: "solid 10px orange ",
          borderBlock: "white",
        }}
      >
        <List>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton variant="contained">
              <ListItemText>PasteSmile</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton variant="contained">
              <ListItemText>DrawMolecule</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton variant="contained">
              <ListItemText>UploadFile</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Paper>
  );
}
export default Opt;
