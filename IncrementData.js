// import React from 'react'
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function IncrementData() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    // const data= await response.json();
    // console.log(data);
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* <div>IncrementData</div> */}

      {users.map((curElem) => {
        return (
          <>
            <div
              style={{
                border: "2px solid black",
                margin: "1%",
                padding: "1%",
                // backgroundColor: "#1a2fff",
              }}
            >
              <div>
                <div>
                  {/*  */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Cindy Baker"
                            src={curElem.thumbnailUrl}
                          />
                          <h4>@123PVT.LTD</h4>
                          <h2>John clark</h2>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <h4>Ownership</h4>
                      </Grid>
                      <Grid item xs={6}>
                        <h4>Invested amount</h4>
                      </Grid>
                      <Grid item xs={6}>
                        <h4>xyz%</h4>
                      </Grid>
                      <Grid item xs={6}>
                        <h4>xyz%</h4>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* <div>
                    <p>{curElem.title}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
