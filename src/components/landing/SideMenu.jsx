import { Sidebar, Menu, MenuItem,SubMenu } from "react-pro-sidebar";
import { Link,Outlet } from 'react-router-dom';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';


function SideMenu() {
  return (
    <div style={{ display: "flex", height: "91vh" }}>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: active ? "#E7EAEE":"#4A5568" ,
                  backgroundColor: active ? "#89AF3E" : undefined,
                };
            },
          }}
        >
          <MenuItem active routerLink={<Link to="/Dashboard" />} icon={<PhotoOutlinedIcon />}> Dashboard</MenuItem>
          <SubMenu label="CentOmics" icon={<PhotoOutlinedIcon />}>
          <MenuItem routerLink={<Link to="/Centchem" />}> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <SubMenu label="CentChem"  icon={<PhotoOutlinedIcon />}>
          <MenuItem routerLink={<Link to="/CentRepurpose" />}> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
          <MenuItem icon={<PhotoOutlinedIcon />}> My Projects</MenuItem>
          <MenuItem icon={<PhotoOutlinedIcon />}> Menu Item-1</MenuItem>
          <MenuItem icon={<PhotoOutlinedIcon />}> Menu Item-2</MenuItem>
        </Menu>
      </Sidebar>
      
      <Outlet />
    </div>
  );
}

export default SideMenu;
