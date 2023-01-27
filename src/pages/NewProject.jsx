import { Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CardContent } from "@mui/material";
import CloseButton from "react-bootstrap/CloseButton";

function NewProject() {
  const mystyle = {
    padding: "300px",
    top: "50px",
  };

  return (
    <div style={mystyle}>
      <Card style={{ width: "50rem" }}>
        <Card.Header>
          New Project{" "}
          <CloseButton style={{ position: "absolute", top: "1", right: "0" }} />
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
                />
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

            <Button type="Button" className="btn btn-primary float-right">
              Save
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default NewProject;
