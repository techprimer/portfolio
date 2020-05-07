import React from 'react' ;
import {Image , Col ,Row,Card,CardColumns }from 'react-bootstrap';
import { Link , BrowserRouter } from 'react-router-dom';
import './Project.css'
import login from './images/login.png'
import ecom from './images/ecom.png'
import lms from './images/lms.png'
import hms from './images/hms.png'
import jarvis from './images/jarvis.PNG'
const Project = ()=>
{

    return(

        <div>
          
             
   

  <div>
    <div className="project">
    
    <div className="container pb-5">
      <Row>
      <div className="container">
        <h2 style={{color:'white'}} >web devlopment project</h2>
      </div>
      </Row>
      <Row >
      
      <div className="box">
        <div className="imgbox">
          <img src={login} ></img>
        </div>
        <div className="detail text-center">
          <p className="text-center mt-5">Login and registration page using HTML and CSS </p>
          <a href="https://github.com/techprimer/static-login-registration-page" className="text-white " ><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="imgbox">
          <img src={ecom} ></img>
        </div>
        <div className="detail text-center">
          <p className="text-center mt-5">E-commerce website</p>
          <a href="https://github.com/techprimer/e-commerce-website" className="text-white " ><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="imgbox">
          <img src={lms} ></img>
        </div>
        <div className="detail text-center">
          <p className="text-center mt-5">Leave management system for college faculty using glance bootstrap template and php </p>
          <a href="https://github.com/techprimer/Leave-management-system" className="text-white " ><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
     
      </Row>
    </div>
    
    </div>
  </div>
  <div className="project1">
    
    <div className="container">
      <Row>
      <div className="container">
        <h2 style={{color:'white'}} >mini projects</h2>
      </div>
      </Row>
      <Row className="container">
      
      <div className="box">
        <div className="imgbox">
          <img src={hms} ></img>
        </div>
        <div className="detail text-center">
          <p className="text-center mt-5">hospital management system using python</p>
          <a href="https://github.com/techprimer/clinic-and-health-management-system" className="text-white " ><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="imgbox">
          <img src={jarvis} ></img>
        </div>
        <div className="detail text-center">
          <p className="text-center mt-5">jarvis the window assistance using python</p>
          <a href="https://github.com/techprimer/jarvis-window-assistance" className="text-white " ><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
      
      
     
      </Row>
    </div>
    
    </div>

  

   </div>     
        );


    
        
}

export default Project;