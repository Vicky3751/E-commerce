import { AutoGraphOutlined } from '@mui/icons-material';
// import {  Menu as Menuicon } from '@mui/icons-material';
// import { IconButton } from '@mui/material';
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
const SideBar = () => {
  // const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', flexWrap: 'wrap', }}>
      <Sidebar transitionDuration={500} style={{ width: '100%' }}>
        <div style={{ width: "100%", height: '100px', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
          <img src={require("../assets/images/logo.png")} alt="" />
        </div>
        <Menu renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>} >
          <SubMenu label="Charts" icon={<AutoGraphOutlined />}>
            <MenuItem routerLink={<Link to="/documentation" />} icon={<AutoGraphOutlined />}> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
            <SubMenu label="Charts" icon={<AutoGraphOutlined />}>
              <MenuItem icon={<AutoGraphOutlined />}> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main style={{ padding: 10 }}>
        <IconButton onClick={() => collapseSidebar()}>
          <Menuicon />
        </IconButton>
      </main> */}
    </div>
  )
}

export default SideBar