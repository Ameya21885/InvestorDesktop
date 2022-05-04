// import React from 'react'
import * as React from "react";
import { useState } from "react";
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
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function HomeTwoComment() {
  // uploading img
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  // back button
  let navigate = useNavigate();
  const homeTo = () => {
    navigate("/home");
  };

  return (
    <>
      {/* <div>HomeTwoComment</div> */}
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <h2>@123PVT.LTD</h2>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      {/* back button */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "0",
          width: "250px",
          height: "100px",
        }}
      >
        <Stack spacing={2} direction="row" >
          <Button variant="contained" onClick={homeTo}>
            Back to Home Page
          </Button>
        </Stack>
      </div>

      <div style={{ margin: "2%", padding: "2%" }}>
        <Grid item xs={8} style={{ margin: "1%", padding: "1%" }}>
          <TextField id="outlined-basic" label="Product's description" variant="outlined" />
        </Grid>
        <Grid item xs={4} style={{ margin: "1%", padding: "1%" }}>
          <TextField id="outlined-basic" label="Bussiness pitch" variant="outlined" />
        </Grid>
      </div>

      {/* uploading img */}
      <div className="heading">Add product image</div>
      <div style={{ margin: "1%", padding: "1%" }}>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <img
              src=""
              alt="UploadImage"
              style={{
                width: "50px",
                height: "50px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            />
            {/* <i className="material-icons">Upload_Image</i> */}
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
    </>
  );
}
