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
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <h3>John dep</h3>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      {/*  */}
      <div>
        <h2>Company Name</h2>
      </div>

      {/*  */}
      <div style={{ margin: "1%", padding: "1%" }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Company's description"
            variant="outlined"
            style={{ padding: "1%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Company's valuation"
            variant="outlined"
            style={{ padding: "1%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="No. of employes"
            variant="outlined"
            style={{ padding: "1%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Owenership list"
            variant="outlined"
            style={{ padding: "1%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Company interested category"
            variant="outlined"
            style={{ padding: "1%" }}
          />
        </Grid>
      </div>

      {/*  */}
      <div>
        <Button variant="text">Back</Button>
      </div>
    </>
  );
}
