// import React from 'react'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IncrementData from "./IncrementData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// tabs

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Increment() {
  // tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          // border:'2px solid black',
          backgroundColor: "#293ca3",
          padding: "2%",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <h2>John dept</h2>
          <p>Ozone pvt.ltd</p>
        </Stack>
      </div>

      {/*  */}
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <h2>Current value</h2>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h2>Invested value</h2>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h3>90,000rs</h3>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h3>80,000rs</h3>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h2>Gain/Loss</h2>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <h3>10%/10%</h3>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/*  */}
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Invested companies" {...a11yProps(0)} />
              <Tab label="Statistics" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <IncrementData />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </div>
    </>
  );
}
