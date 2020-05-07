import React from 'react' ;
import divimage from './divimage.jpg'
import {Image , Col ,Row,Card,CardColumns,ProgressBar,Button }from 'react-bootstrap';
import { Link , BrowserRouter } from 'react-router-dom';
import "./Home.css"
import resume from './Resume.pdf'
import dev from './images/development.png'
import design from './images/designicon.png'
import self from './images/self.PNG'


const Home = ()=>
{

    return(
      
        
        <div>
          
             <div className="poster-image text-center " id="main">
               
           
               <Row className="content ml-5 " >
               <Col xs={12}  >
               <h1 style={{fontSize:'50px'}}>HELLO , I'M YASH  </h1>
               <p className="ml-6" >WEB DEVELOPER</p>
               <div id="social-link">
               <a href="https://github.com/techprimer/" id="links" to="/"><i className="fa fa-github  " aria-hidden="true"></i></a>
               <a href="linkedin.com/in/yash-patel-4825b41a9" id="links" ><i className="fa fa-linkedin px-4" aria-hidden="true"></i></a>
               <a href="https://m.facebook.com/profile.php?ref=bookmarks" id="links"><i className="fa fa-facebook px-2" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/yashp_11/?hl=en" id="links"><i className="fa fa-instagram px-3  " aria-hidden="true"></i></a>

               </div>

               </Col>
               
              
               </Row>
              
              
              
            </div>
            
            <div >
            <div>
    <div className="pro-div">
    
    <div className="sec-div pb-5" id="projects">
      
      <Row >
        
      
      <div className="box-div">
        <div className="imgbox-div ">
        <div class="text-div d-flex justify-content-center align-items-center">
                <span className="text-span">WHAT I'VE DONE</span>      
        </div>
          <img src={divimage} ></img>
          
        </div>
        
        <div className="detail-div text-center">
          <div className="mt-5 " style={{fontSize:'80px'}}><i class="fa fa-cubes" aria-hidden="true"></i></div>
          <h2 className="text-center mt-5">Web Development And Mini Projects </h2>
          <div className="mt-5">
          <Link to="project" >
            <button class="button">Project</button>
          </Link>
        </div>
          
        </div>
        
      </div>
      
      </Row>
      </div>
      </div>
      </div>
              
             

            </div>

            <div className="aboutme" id="aboutme">
             <Row className="ml-5 mt-3  d-flex justify-content-center align-items-center">
                <div className="mt-5" >
                  <h2 className=" text-center d-flex justify-content">A LITTLE BIT ABOUT ME</h2>
                </div>
              </Row>
              <Row  className="ml-5 mt-3  d-flex justify-content-center align-items-center" >
                <div className="mt-5 ml-5 text-center img-wrap">
                  <img src={self} className="text-center" alt="my image" ></img>
                </div>
              </Row>
              <Row >
                <div className="container mt-5 pb-5">
                  <p className="aboutme-para text-center justify-content">Hey!My name is yash and i'm a web developer with  a passion for frontend development and design.i'm currently third year student at sakec pursuing a degree in Information Technology.i aspire towards a career that allow me to channel my creativity through creating beautiful software and engaging experience    </p>
                </div>
              </Row>


           </div>
           <div className="skillset" id="skill">
             <Row className="ml-5 py-3">
               <h2 className="container ml-5" style={{color:'white'}}>SKILLS</h2>
             </Row>
             <Row className="ml-5">
              <Col xs={5}>
              <p className="ml-5">HTML</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'80%'}}></div>
            </div>
            </Col>
            <Col xs={5} className="ml-5">
              <p className="ml-5 ">CSS</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'75%'}}></div>
            </div>
            </Col>
             </Row>
             <Row className="ml-5">
              <Col xs={5}>
              <p className="ml-5">JAVASCRIPT</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'60%'}}></div>
            </div>
            </Col>
            <Col xs={5} className="ml-5">
              <p className="ml-5">PYTHON</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'80%'}}></div>
            </div>
            </Col>
             </Row>
             <Row className="ml-5">
              <Col xs={5}>
              <p className="ml-5">C </p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'80%'}}></div>
            </div>
            </Col>
            <Col xs={5} className="ml-5">
              <p className="ml-5">REACT</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'60%'}}></div>
            </div>
            </Col>
             </Row>
             <Row className="ml-5">
              <Col xs={5}>
              <p className="ml-5">BOOTSTRAP</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'70%'}}></div>
            </div>
            </Col>
            <Col xs={5} className="ml-5">
              <p className="ml-5">PYTHON FOR DATASCIENCE</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'65%'}}></div>
            </div>
            </Col>
             </Row>
             <Row className="pb-5 ml-5">
              <Col xs={5}>
              <p className="ml-5">DATA STRUCTURE</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'65%'}}></div>
            </div>
            </Col>
            <Col xs={5} className="ml-5">
              <p className="ml-5">GIT</p>
             <div class="progress ml-5 "> 
              <div class="progress-bar" style={{width:'70%'}}></div>
            </div>
            </Col>
             </Row>

           </div>

           <div className="resume d-flex justify-content-center align-items-center">
            
               <Row className="d-flex justify-content-center align-items-center">
                 <div className="mt-5 ml-5">
                 <h2  style={{color:'white'}}> Download Resume</h2>
                 </div><br></br>
                 <div className="container ml-5 pb-5 mt-5 d-flex justify-content-center align-items-center">
                  <button className="button " style={{width:'200px'}} ><a href={resume} style={{color:'white' , textDecoration:'none'}} target="_blank">Download Resume</a></button>
                </div>
                </Row>

           </div>

           <div className="doing">
             <Row >
               <div className="mt-5 col-12 ">
                 <h2 className="text-center">What I Do</h2>
               </div>

             </Row>
             <Row className="mt-2 py-5 text-center">
               <Col md={5} className="ml-5">
                
                 <div className="mt-5 text-center ">
                  <img  src={design} style={{width:'230px',borderRadius:'50%',height:'230px'}} alt="my image" className="text-center"></img>
                  
                </div>
                <h5 className="mt-5">DESIGN</h5>
                <div className="mt-5 text-black">
                <h6>Design isn't just what a product looks like and feels like on the outside Design encompasses the internal functionality of a product as well as the overall user experience. i strive to design interfaces and experiences that people can enjoy on all digital medium</h6>
                </div>


               </Col>
               <Col md={5} className="ml-5  text-center">
                 
                 <div className="mt-5 text-center ">
                  <img src={dev} style={{width:'230px',borderRadius:'50%',height:'230px'}} alt="my image" className="text-center"></img>
                </div>
                <h5 className="mt-5">DEVELOPMENT</h5>
                <div className="mt-5 text-black">
                <h6>With a strong foundation in information technology.I'm passionate about web design and development.As I grow as a developer,I hope to write clean and readable code that can be used by others and leveraged to create beautiful software </h6>
                </div>

               </Col>
               
             </Row>

           </div>

           <div className="contactme" id="contactme">
            
             <Row >
               <div className="mt-5 col-12 ">
                 <h2 className="text-center text-white">Contact Me</h2>
               </div>

             </Row>
             <Row className="mt-5 ml-5 text-center">
               <Col>               
               <div className="emailid">
                <i class="fa fa-envelope text-white" aria-hidden="true"><p>yashpatel.techprimer@gmail.com</p></i>
               
              </div>
              </Col>
              <Col >
              <div id="social-link">
                
              <a href="https://github.com/techprimer/" id="links" to="/"><i className="fa fa-github  " aria-hidden="true"></i></a>
               <a href="linkedin.com/in/yash-patel-4825b41a9" id="links" ><i className="fa fa-linkedin px-4" aria-hidden="true"></i></a>
               <a href="https://m.facebook.com/profile.php?ref=bookmarks" id="links"><i className="fa fa-facebook px-2" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/yashp_11/?hl=en" id="links"><i className="fa fa-instagram px-3  " aria-hidden="true"></i></a>


               </div>
              </Col>

             </Row>
             
             

          </div>
    </div>  
   

        
        );

       
    
        
}

export default Home;