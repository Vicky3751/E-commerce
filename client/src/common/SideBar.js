import { Assessment, BarChart, Block, Dashboard, Info, MiscellaneousServices, People, Person, PersonOff, Phone, ShoppingCart } from '@mui/icons-material';
import React from 'react'
// import {  Menu as Menuicon } from '@mui/icons-material';
// import { IconButton } from '@mui/material';
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
          <SubMenu defaultOpen label="Dashboard" icon={<Dashboard />}>
            <MenuItem routerLink={<Link to="/admin/dashboard/users" />} icon={<Person />}> Users</MenuItem>
            <MenuItem routerLink={<Link to="/admin/dashboard/products" />} icon={<BarChart />}> Reports</MenuItem>
            <MenuItem routerLink={<Link to="/admin/dashboard/orders" />} icon={<ShoppingCart />}> Orders</MenuItem>
          </SubMenu>
          <SubMenu defaultOpen label="Reports" icon={<Assessment />}>
            <MenuItem routerLink={<Link to="/admin/reports/users" />} icon={<Person />}> Users</MenuItem>
            <MenuItem routerLink={<Link to="/admin/reports/products" />} icon={<BarChart />}> Reports</MenuItem>
            <MenuItem routerLink={<Link to="/admin/reports/orders" />} icon={<ShoppingCart />}> Orders</MenuItem>
          </SubMenu>
          <SubMenu defaultOpen label="Others" icon={<MiscellaneousServices />}>
            <MenuItem routerLink={<Link to="/admin/report" />} icon={<PersonOff />}> Reported Users</MenuItem>
            <MenuItem routerLink={<Link to="/admin/fraud" />} icon={<Block />}> Fraud Products</MenuItem>
          </SubMenu>
          <MenuItem  icon={<Info />}> About Us</MenuItem>
          <MenuItem  icon={<Phone />}> Contact Us</MenuItem>
          <MenuItem  icon={<People />}> Partners</MenuItem>
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