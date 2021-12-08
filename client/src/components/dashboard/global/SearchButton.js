import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const MyAppBar = styled(AppBar)({
  background: "none",
  boxShadow: "none",
  padding: "none",
});

const Search = styled("div")(({ theme }) => ({
  color: "white",
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "#2b3240",
  border: "1px solid #2b3240",
  "&:hover": {
    backgroundColor: "white",
    color: "#2b3240",
  },
  margin: "20px",
  padding: "none",
  width: "100%",
  height: "28px",
  fontSize: "10px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    fontSize: "0",
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
    width: "70%",
    height: "20px",
    fontSize: "15px",
    marginTop: "-4px",

    [theme.breakpoints.up("sm")]: {
      width: "0",
      "&:focus": {
        width: "20ch",
        paddingBottom: "10px",
      },
    },
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: "0" }}>
      <MyAppBar position="static" width="100vw">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>
        </Toolbar>
      </MyAppBar>
    </Box>
  );
}
