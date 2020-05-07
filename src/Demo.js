//import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "tachyons"
import './Demo.css'
//import { Link , BrowserRouter } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from 'react';
import  { Navbar , Nav,Container ,NavLink,NavItem} from 'react-bootstrap';

const  Demo = ()=>{


    return (  
<div>
 <Navbar  fixed="top" id="navbar"collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Navbar.Brand id="logo" className="Brand ml-5">Techprimer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto px-3">
       
              <Link id="abc" className="px-3"
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          ><i className="fa fa-home px-1" aria-hidden="true"></i>Home</Link>

         
          <Link id="abc" className="px-3"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration= {500}
          ><i class="fa fa-code px-1" aria-hidden="true"></i>Projects</Link>
          <Link id="abc" className="px-3"
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          ><i class="fa fa-user px-1" aria-hidden="true"></i>About me</Link>
          <Link id="abc" className="px-3"
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          ><i class="fa fa-paper-plane px-1" aria-hidden="true"></i>Skills</Link>
          <Link id="abc" className="px-3"
              activeClass="active"
              to="contactme"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
          ><i class="fa fa-phone px-1" aria-hidden="true"></i>Contact</Link>
             
    </Nav>
    
  </Navbar.Collapse>
</Navbar> 
 </div>
);
  }

 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.getElementById("navbar").style.padding = "10px 10px ";
      document.getElementById("logo").style.fontSize = "22px";
      
    } else {
      document.getElementById("navbar").style.padding = "10px 50px";
      document.getElementById("logo").style.fontSize = "35px";
      
    }
  }


export default Demo;