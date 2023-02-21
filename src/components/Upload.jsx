import React from "react";
import { useDropzone } from "react-dropzone";
// import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../assets/css/Upload.css";

function Upload(props) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 2,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });
  const { show, closeModal } = props;

  return (
    <div className="style">
      <div className={show ? "modal" : "hide"}>
        {/* <section className="container"> */}

        <Card
          style={{
            width: "30rem",
            height: "180px",
            textAlign: "center",
            padding: "60px",
          }}
        >
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            {/* <em>(2 files are the maximum number of files you can drop here)</em> */}
          </div>
        </Card>
        <aside>
          <h4>Accepted files</h4>
          <ul>{acceptedFileItems}</ul>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
          <div>
            <Button variant="primary">Save</Button> {""}
            <Button variant="primary" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </aside>
        {/* </section> */}
      </div>
    </div>
  );
}
export default Upload;
