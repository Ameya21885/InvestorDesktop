// import React from 'react'
import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOne from "./HomeOne";
import Increment from "./Increment";
import Profile from "./Profile";
import HomeTwoComment from "./HomeTwoComment";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import AddDetails from "./AddDetails";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
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
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // let navigate = useNavigate();
  // const welcomeTo = () => {
  //   navigate("/welcome");
  // };

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                {/* <MenuIcon /> */}
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Stack>
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Preneurship
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Stack spacing={2} direction="row">
                {/* <Button variant="contained" >
                  Back to Welcome
                </Button> */}
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 500,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Setting" {...a11yProps(0)} />
          <Tab label="Home" {...a11yProps(1)} />
          <Tab label="Filter" {...a11yProps(2)} />
          <Tab label="Increment" {...a11yProps(3)} />
          <Tab label="Profile" {...a11yProps(4)} />
          <Tab label="HomeTwoComments" {...a11yProps(5)} />
          <Tab label="Add Detail" {...a11yProps(6)} />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
          style={{
            width: "-webkit-fill-available",
          }}
        >
          Item One
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{
            width: "-webkit-fill-available",
          }}
        >
          {/* Item Two */}
          <HomeOne />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          style={{
            width: "-webkit-fill-available",
          }}
        >
          {/* Item Three */}
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
          style={{ width: "-webkit-fill-available" }}
        >
          {/* Item Four */}
          <Increment />
        </TabPanel>
        <TabPanel
          value={value}
          index={4}
          style={{
            width: "-webkit-fill-available",
          }}
        >
          {/* Item Five */}
          <Profile />
        </TabPanel>
        <TabPanel
          value={value}
          index={5}
          style={{
            width: "-webkit-fill-available",
          }}
        >
          {/* Item Six */}
          <HomeTwoComment />
        </TabPanel>
        <TabPanel
          value={value}
          index={6}
          style={{
            width: "-webkit-fill-available",
          }}
        >
          {/* Item Seven */}
          <AddDetails/>
        </TabPanel>
      </Box>
    </>
  );
}
