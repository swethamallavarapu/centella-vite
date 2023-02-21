import React from "react";
import { Paper, styled, Stack, Divider } from "@mui/material";
import { Card, Row } from "react-bootstrap";
import CentChemPage from "./CentChemPage";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "../assets/css/VisualEditor.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import Skeleton from "@mui/material/Skeleton";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import Box from "@mui/material/Box";
// import DialogVisualEditor from "../components/Molecule/DialogVisualEditor";

function VisualEditor() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#2D3748",
  }));
  const itemStyle = {
    width: "300px",
    height: "169px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "8px",
    boxShadow: "0px 1px 9px #00000029",
  };

  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <CentChemPage />
      </div>

      <>
        <Card>
          <Card.Header>
            <div className="hstack gap-5">
              Synthesis
              <div className="vr"></div>
              Exact Search
              <div className="vr"></div>
              Similarity Search
              <div className="vr"></div>SubstructureSearch
              <div className="vr"></div>Chemical Properties and Alerts
            </div>
          </Card.Header>
          <Card.Header>
            {/* <div className="hstack gap-5"> */}
            <Stack className="p-2" direction="row" spacing={15}>
              <div>
                {" "}
                <Form.Check type="checkbox" label="SelectAll" />{" "}
              </div>
              <div>
                <Form.Check type="checkbox" label=" 1 Step Route" />
              </div>
              <div>
                <Form.Check type="checkbox" label=" 2 Step Route" />
              </div>

              <div>
                <IconButton aria-label="delete" onClick={handleClickOpen}>
                  <FilterAltIcon />
                </IconButton>
              </div>

              <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
              >
                <DialogContent>
                  <div className="label">
                    <Stack className="p-1" spacing={5}>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={40}
                        animation={false}
                      >
                        Select Vendor
                      </Skeleton>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          Select Vendor
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Vendor 1
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Vendor 2
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Vendor 3
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Vendor 4
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Vendor 5
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Stack>
                  </div>

                  <div className="label">
                    <Stack className="p-1" spacing={4}>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={40}
                        animation={false}
                      >
                        Select Database
                      </Skeleton>
                      <Stack className="p-1" direction="row" spacing={5}>
                        <Button>emolecules</Button>
                        <Button>Surechembl</Button>
                      </Stack>
                    </Stack>
                  </div>
                  <div className="label">
                    <Stack className="p-1" spacing={4}>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={40}
                        animation={false}
                      >
                        Select Leadtime
                      </Skeleton>
                    </Stack>
                  </div>
                  <div className="label">
                    <Stack className="p-1" spacing={4}>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={40}
                        animation={false}
                      >
                        BB Price
                      </Skeleton>
                      <Stack className="p-1" direction="row" spacing={5}>
                        <Form.Check type="checkbox" label="<$100/g" />
                        <Form.Check type="checkbox" label="<$500/g" />
                        <Form.Check type="checkbox" label="<$1k/g" />
                        <Form.Check type="checkbox" label="<$10k/g" />
                        <Form.Check type="checkbox" label="All" />
                      </Stack>
                    </Stack>
                  </div>
                  <div className="label">
                    <Stack className="p-1" spacing={4}>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={40}
                        animation={false}
                      >
                        SCR Price
                      </Skeleton>
                      <Stack
                        className="p-1"
                        direction="row"
                        spacing={5}
                        animation={false}
                      >
                        <Form.Check type="checkbox" label="<$100/g" />
                        <Form.Check type="checkbox" label="<$500/g" />
                        <Form.Check type="checkbox" label="<$1k/g" />
                        <Form.Check type="checkbox" label="<$10k/g" />
                        <Form.Check type="checkbox" label="All" />
                      </Stack>
                    </Stack>
                  </div>
                </DialogContent>
                {/* <DialogVisualEditor /> */}
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>

              <DropdownButton
                id="dropdown-basic-button"
                title="Select Vendors"
                variant="secondary"
              >
                <Dropdown.Item>Vendor 1</Dropdown.Item>
                <Dropdown.Item>Vendor 2 </Dropdown.Item>
                <Dropdown.Item>Vendor 3 </Dropdown.Item>
                <Dropdown.Item>Vendor 4 </Dropdown.Item>
                <Dropdown.Item>Vendor 5 </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Vendor 6 </Dropdown.Item>
              </DropdownButton>

              <div>
                <Button variant="outlined" startIcon={<AddIcon />}>
                  Create
                </Button>
              </div>
              {/* </div> */}
            </Stack>
          </Card.Header>
          <Divider />
          <div>
            <Row>
              <Stack className="p-4" direction="row" spacing={4}>
                <Item style={itemStyle}>
                  <span></span>
                </Item>

                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>

                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>

                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>
              </Stack>
            </Row>
          </div>
          <div>
            <Row>
              <Stack className="p-4" direction="row" spacing={4}>
                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>
                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>
                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>
                <Item style={itemStyle}>
                  <span>
                    <div className="mb-2">
                      {["end"].map((direction) => (
                        <DropdownButton
                          // as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="secondary"
                          title={`  ${direction} `}
                        >
                          <Dropdown.Item> emolecule </Dropdown.Item>
                          <Dropdown.Item>mcule</Dropdown.Item>
                          <Dropdown.Item>molport</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">wuxi</Dropdown.Item>
                        </DropdownButton>
                      ))}
                    </div>
                  </span>
                </Item>
              </Stack>
            </Row>
          </div>
        </Card>
      </>
    </div>
  );
}
export default VisualEditor;
