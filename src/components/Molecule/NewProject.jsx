import { Button, Card } from "react-bootstrap";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CardContent } from "@mui/material";
// import CloseButton from "react-bootstrap/CloseButton";
// import CloseIcon from '@mui/icons-material/Close';

function NewProject() {
  const mystyle = {
    padding: "100px",
  };

  // const onClick = () => {
  //   console.log("save");
  // };
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <div style={mystyle}>
      <Card style={{ width: "50rem" }}>
        <Card.Header>
          New Project{" "}
          {/* <CloseButton style={{ position: "absolute", top: "1", right: "0" }} /> */}
        </Card.Header>
        <CardContent>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Project Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Collaborator 1 </Form.Label>
                <Form.Check inline label="View" name="group1" />
                <Form.Check inline label="Edit" name="group2" />
                <Form.Check inline label="Download" name="group3" />
                <Form.Control type="name" placeholder=" " />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Project ID</Form.Label>
                <Form.Control type="name" placeholder="Enter Project Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Collaborator 1</Form.Label>
                <Form.Check inline label="View" name="group1" />
                <Form.Check inline label="Edit" name="group2" />
                <Form.Check inline label="Download" name="group3" />
                <Form.Control type="name" placeholder=" " />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  type="name"
                  placeholder="Enter Project Name"
                />{" "}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Collaborator1</Form.Label>
                <Form.Check inline label="View" name="group1" />
                <Form.Check inline label="Edit" name="group2" />
                <Form.Check inline label="Download" name="group3" />
                <Form.Control type="name" placeholder=" " />
              </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}

            <Button
              type="primary"
              className="btn btn-primary float-right"
              // onClick={(e) => this.save(e)}
            >
              Save
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default NewProject;

// import React, { useState } from "react";
// import StudentForm from "./MyProject";
// import jsonData from "../data.json";

// function NewProject() {
//   const [projectid, setprojectid] = useState(jsonData);

//   const tableRows = projectid.map((info) => {
//     return (
//       <tr>
//         <td>{info.id}</td>
//         <td>{info.projectid}</td>
//         <td>{info.projectname}</td>
//       </tr>
//     );
//   });

//   const addRows = (data) => {
//     const totalStudents = projectid.length;
//     data.id = totalStudents + 1;
//     const updatedStudentData = [...projectid];
//     updatedStudentData.push(data);
//     setprojectid(updatedStudentData);
//   };

//   return (
//     <div>
//       <StudentForm func={addRows} />
//       <div>
//         <table className="table table-stripped">
//           <thead>
//             <tr>
//               <th>S.NO</th>
//               <th>ProjectID</th>
//               <th>ProjectName</th>
//             </tr>
//           </thead>
//           <tbody>{tableRows}</tbody>
//         </table>
//         {/* <StudentForm func={addRows} /> */}
//       </div>
//     </div>
//   );
// }

// export default NewProject;
