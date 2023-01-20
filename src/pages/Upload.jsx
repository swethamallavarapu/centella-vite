import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import "../assets/css/Upload.css";

function Upload() {
  const [file, setFile] = useState(null);

  const UPLOAD_ENDPOINT =
    "http://localhost/react-php-file-upload/backend/upload.php";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await uploadFile(file);
    console.log(res.data);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <Box
      className="text"
      component="span"
      sx={{ p: 12, border: "1px dashed grey" }}
    >
      <form onSubmit={handleSubmit}>
        {/* <h1>React File Upload</h1> */}
        <input type="file" onChange={handleOnChange} />

        <button type="submit">Upload File</button>
      </form>
    </Box>
  );
}

export default Upload;
