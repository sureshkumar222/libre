import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-book"></i>
      
        </div>
        <div className="sidebar-brand-text mx-3">
       ADMIN PORTAL
        </div>
      </a>

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/home"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
      
      </li>
      
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/books"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fa fa-address-book"></i>
          <span>All Books</span>
        </Link>
      
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/Addbooks"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
        <i className="fas fa-book"></i>
          <span>Add Books</span>
        </Link>
      
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/issue-request"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
        <i className="fa fa-address-card"></i>
          <span>Issue Request</span>
        </Link>
      
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"       
          to={"/portal/issuedbooks"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
        <i className="fa fa-bookmark"></i>
          <span>All Issued Books</span>
        </Link>
      
      </li>
 
    </ul>
  );
}

export default Sidebar;