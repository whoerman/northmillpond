import React from "react";
import '../Navbar/navbartop.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {faTint} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Navbartop() {

  return ( 
  <div className = "NavBarDiv">
    <Container fluid >
      <Navbar expand = "lg"variant = "light" bg = "light" >
        <div className="row">
          <div className="col-md-3">
            <Navbar.Brand> <h1 className = "logotext" > < FontAwesomeIcon icon = {faTint}/> Advocate for North Mill Pond</h1> </Navbar.Brand>
          </div>
          <div className="col-md-2">
            <h4> database available from: </h4> 
          </div> 
          <div className="col-md-2">
          </div> 
        </div> 
      </Navbar> 
    </Container> 
  </div>
  );
}

export default Navbartop;