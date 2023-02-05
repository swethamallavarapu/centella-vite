import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import { Container, Row, Col } from "react-bootstrap";

function SideMenu() {
  return (
    <div style={{ display: "flex", marginTop: "11.8vh" }}>
      <Container fluid>
        <Row>
          <Col lg={2} md={3} style={{ padding: "0" }}>
            <Sidebar style={{ height: "88vh", position: "fixed" }}>
              <Menu
                menuItemStyles={{
                  button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                      return {
                        color: active ? "#E7EAEE" : "#4A5568",
                        backgroundColor: active ? "#89AF3E" : undefined,
                      };
                  },
                }}
              >
                <MenuItem
                  active
                  routerLink={<Link to="/Dashboard" />}
                  icon={<PhotoOutlinedIcon />}
                >
                  {" "}
                  Dashboard
                </MenuItem>
                <SubMenu label="CentChem" icon={<PhotoOutlinedIcon />}>
                  <MenuItem routerLink={<Link to="/Centchem" />}>
                    {" "}
                    ADMET Prediction
                  </MenuItem>
                  <MenuItem routerLink={<Link to="/Centchem" />}>
                    {" "}
                    Retro Synthesis
                  </MenuItem>
                  <MenuItem routerLink={<Link to="/Centchem" />}>
                    {" "}
                    Virtual Screen
                  </MenuItem>
                </SubMenu>
                <SubMenu label="CentOmics" icon={<PhotoOutlinedIcon />}>
                  <MenuItem routerLink={<Link to="/CentRepurpose" />}>
                    {" "}
                    Pie charts
                  </MenuItem>
                  <MenuItem> Line charts</MenuItem>
                  <MenuItem> Bar charts</MenuItem>
                  <MenuItem> Line charts</MenuItem>
                  <MenuItem> Bar charts</MenuItem>
                  <MenuItem> Line charts</MenuItem>
                  <MenuItem> Bar charts</MenuItem>
                </SubMenu>
                <MenuItem
                  icon={<PhotoOutlinedIcon />}
                  routerLink={<Link to="/MyProject" />}
                >
                  My Projects
                </MenuItem>
                <MenuItem icon={<PhotoOutlinedIcon />}> Menu Item-1</MenuItem>
                <MenuItem icon={<PhotoOutlinedIcon />}> Menu Item-2</MenuItem>
                <MenuItem icon={<PhotoOutlinedIcon />}> My Projects</MenuItem>
                <MenuItem icon={<PhotoOutlinedIcon />}> Menu Item-1</MenuItem>
                <MenuItem icon={<PhotoOutlinedIcon />}> Menu Item-2</MenuItem>
              </Menu>
            </Sidebar>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                height: "100%",
                paddingTop: "10px",
                paddingLeft: "10px",
              }}
            >
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SideMenu;
