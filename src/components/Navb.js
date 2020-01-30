import React from 'react';
import './../App.scss';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

function Navb() {

  return (

  <Navbar collapseOnSelect expand="lg" className="">
    <Link to="/">
      <Navbar.Brand className="navbar-brand">Serify</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <ul class="navbar-nav ml-auto">
              {/* TODO: implement this link */}
               <Link to="#">
                 <li>About</li>
               </Link>
    </ul>
    </Navbar.Collapse>
  </Navbar>
  

    );
  }

export default Navb;