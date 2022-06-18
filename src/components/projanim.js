import React, { Component } from 'react';
import './style.css';
import {Container, Row} from 'react-bootstrap';
import Animate from 'react-smooth';
// import particles from './const/project_particle.js';
import ProjectBody from './Proj.js';

class Projects extends Component {
 
  render() {
    return (
        <Container id="work" className="About-header" fluid={true}>
            <h3 className="title-a" style={{color:"white",textAlign:"center",paddingTop:"2%",}}>My Projects</h3>
           <Animate to="1" from="0" attributeName="opacity">
           
           <Row className="About-main">
           {/* <Particles
            params={particles}
            className="particle"
          /> */}

              <ProjectBody />
           </Row>
           <br/>
           </Animate>
       </Container>
    );
  }
}

export default Projects;
