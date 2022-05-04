// import React from 'react'
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
//
import { useNavigate } from "react-router-dom";

export default function HomeOneComment() {
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

  let navigate = useNavigate();
  const homeTwoCommentTo = () => {
    navigate("/HomeTwoComment");
  };

  return (
    <>
      {/* <div>HomeOneComment</div> */}

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
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Cindy Baker" src={curElem.thumbnailUrl} />
                    <h2>John clark</h2>
                  </Stack>

                  {/*  */}
                  <div>
                    <p>{curElem.title}</p>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
                      <Button variant="outlined">Like</Button>
                      <Button variant="outlined">Comments</Button>
                      <Button variant="contained" onClick={homeTwoCommentTo}>
                        Connect
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
