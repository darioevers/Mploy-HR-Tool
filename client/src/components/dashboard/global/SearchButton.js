import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Switch from "@mui/material/Switch";
import SearchIcon from "@material-ui/icons/Search";

const MyAppBar = styled(AppBar)({
  background: "none",
  boxShadow: "none",
  padding: "0 30px",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "#2b3240",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "#2b324098",
  },
  margin: "20px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static" width="100vw" backgroundColor="red">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <div className="logo">
            <h1>Mploy</h1>
          </div>
          <div className="top-nav-line"></div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>

          <div className="language_switch">
            <select name="language" id="language">
              <option value="volvo">&#127465;&#127466;</option>
              <option value="saab">&#127468;&#127463;</option>
            </select>
          </div>
          <div className="darkmode_switch">
            <Switch {...label} />
          </div>
        </Toolbar>
      </MyAppBar>
    </Box>
  );
}
