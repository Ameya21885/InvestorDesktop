// import React from 'react'
import * as React from "react";
import welcomeimg from "./img/welcome.jpg";
import "../component/investor.css";
// import welcomeOne from "./img/welcomeOne.jpg";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Welcome() {
  let navigate = useNavigate();
  const homeTo = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <img src={welcomeimg} alt="" className="image" />
        <div className="centered">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>Welcome!</h1>
              </Grid>
              <Grid item xs={12}>
                <Avatar
                  alt="Logo"
                  src=""
                  sx={{ width: 80, height: 80 }}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <h2>Company Name</h2>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={homeTo}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}
