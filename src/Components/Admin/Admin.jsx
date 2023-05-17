import React, { useContext, useState } from 'react'

import { AiOutlineBars} from 'react-icons/ai';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink,Link, useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import AdminUsers from './AdminUsers';
import Products from './Products';

import { Context } from '../Context/Context_api';
import Add_Product from './Add_Product';

const Admin = () => {
  const Navigate = useNavigate()

const {childrens,setChildrens} =useContext(Context)
  

  return (
    <>
    <Navbar style={{backgroundColor:"rgb(51, 51, 51)",color:"white",fontSize:"30px", height:"5rem",justifyContent:"center",alignItems:"center",fontFamily:" 'Quicksand', sans-serif"}}>Welcome Admin</Navbar>
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', fontFamily:" 'Quicksand', sans-serif" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Home
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact onClick={() => setChildrens (<AdminUsers/>)} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact onClick={() => setChildrens (<Products/>) } activeClassName="activeClicked">
            <CDBSidebarMenuItem icon='bars' >Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact onClick={() => setChildrens (<Add_Product/>) } activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shopping-cart">Add products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Revenue</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">help</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      
      </CDBSidebar>
      {childrens}
    </div>

    </>
  )
}

export default Admin