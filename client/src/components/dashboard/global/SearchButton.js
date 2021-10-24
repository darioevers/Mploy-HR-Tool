import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Switch from "@mui/material/Switch";
import SearchIcon from "@material-ui/icons/Search";

const MyAppBar = styled(AppBar)({
  background: "none",
  boxShadow: "none",
  padding: "none",
});

const Search = styled("div")(({ theme }) => ({
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

const DarkModeSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  marginLeft: "25px",
  width: 50,
  height: 30,
  padding: 1.8,
  "& .MuiSwitch-switchBase": {
    padding: 1,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "white" : "#2b3240",
        opacity: 1,
        border: "1px solid #2b3240",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      backgroundColor:
        theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    margin: "5px 6px",
  },
  "& .MuiSwitch-track": {
    borderRadius: "50px",
    backgroundColor: theme.palette.mode === "light" ? "white" : "#2b3240",
    border: "1px solid black",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="static" width="100vw" backgroundColor="red">
        <Toolbar>
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
            <div className="eng_wrapper">
              <p>ENG</p>
            </div>
            <div className="deu_wrapper">
              <p>DEU</p>
            </div>
          </div>
          <div className="darkmode_switch">
            <FormControlLabel
              control={<DarkModeSwitch sx={{ m: 0 }} defaultunchecked />}
              label=""
            />
          </div>
        </Toolbar>
      </MyAppBar>
    </Box>
  );
}
