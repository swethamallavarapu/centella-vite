import {
  Notifications,
  AccountCircle,
  KeyboardArrowDown,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { AppBar, Badge, Box, InputBase, styled, Toolbar } from "@mui/material";
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid black",
  variant: "outlined",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
}));
const Topbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Toolbar />
        <Search variant="outlined">
          <InputBase placeholder="search" icon={<SearchIcon />} />
          {/* <Search /> */}
        </Search>
        <Chip icon={<AddIcon color="black" />} label="Add Project" />
        <Icons color="black">
          <Badge color="error" variant="dot">
            <Notifications />
          </Badge>
        </Icons>
        <Icons color="black">
          <AccountCircle /> <span>Syed Riyaz</span> <KeyboardArrowDown />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Topbar;
