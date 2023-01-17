import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import RectangleOutlinedIcon from "@mui/icons-material/RectangleOutlined";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import ChangeHistoryOutlinedIcon from "@mui/icons-material/ChangeHistoryOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <DragHandleIcon />
          </IconButton>
          <IconButton>
            <HexagonOutlinedIcon />
          </IconButton>
          <IconButton>
            <RectangleOutlinedIcon />
          </IconButton>
          <IconButton>
            <PentagonOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChangeHistoryOutlinedIcon />
          </IconButton>
          <IconButton>
            <SwitchLeftOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
