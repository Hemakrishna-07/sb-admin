import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    <Link to='/dashboard'>
        <li className="nav-item active">
            <div className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </div>
        </li>
    </Link>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"/>

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        CRUD
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item">
        <Link to='/add-user'>
        <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <PersonAddIcon/> &nbsp;
            <span>Add User</span>
        </div>
        </Link>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"/>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider d-none d-md-block"/>

    {/* <!-- Sidebar Toggler (Sidebar) --> */}
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    </ul>
  </>
}

export default Sidebar